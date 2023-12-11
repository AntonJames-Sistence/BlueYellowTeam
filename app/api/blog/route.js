import { NextResponse } from "next/server";
import {
  collection,
  setDoc,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { storeDB } from "../../../data/firebase";
import { subSectionHasErrors } from "./[postId]/route";
import isAdmin from "../lib/isAdmin";

const createGoogleDriveLink = (link) => {
  link = link.split("https://drive.google.com/file/d/");
  const viewPosition = link[1].indexOf("/view");
  const linkId = link[1].slice(0, viewPosition);
  return `https://drive.google.com/uc?export=view&id=${linkId}`;
};

const createId = (title) => {
  const invalid = new Set(["!", ",", "?", "."]);
  const filteredString = title
    .split("")
    .filter((char) => !invalid.has(char))
    .join("");
  const id = filteredString.replace(/ /g, "-");
  return id;
};

const postHasErrors = (post, type) => {
  const errors = {};

  if (!post.title) errors.title = "Blog post missing title";
  if (!post.description) errors.description = "Blog post missing description";
  if (!post.image) errors.media = "Blog needs an image";
  if (type === "PUT" && !post.id) errors.id = "Blog needs an id to update";
  if (type === "POST" && (!post.subSections || !post.subSections.length))
    errors.subSections = "Blog needs at least one subSection";

  if (Object.values(errors).length) return errors;
  return false;
};

const postExist = async (id) => {
  const postSnap = await getDoc(doc(storeDB, "posts", id));
  return postSnap.exists();
};

export async function GET() {
  try {
    const allPostSS = await getDocs(collection(storeDB, "posts"));
    const data = [];

    allPostSS.forEach((doc) => {
      const fullPost = { ...doc.data() };
      data.push(fullPost);
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error("couldn't retreive all blog post");
  }
}

export async function POST(request, res) {
  try {
    await isAdmin();
    const post = await request.json();

    const errors = postHasErrors(post, "POST");
    if (errors) {
      return NextResponse.json({ errors }, { status: 404 });
    }

    const id = createId(post.title);

    if (await postExist(id)) {
      return NextResponse.json(
        { errors: "A post already exist with this title" },
        { status: 404 }
      );
    }

    await setDoc(
      doc(storeDB, "posts", id),
      {
        title: post.title,
        description: post.description,
        image: createGoogleDriveLink(post.image),
        createdAt: new Date(),
        id: id,
      },
      { headers: { Authorization: `Bearer ${session.accessToken}` } }
    );

    for (let subSection of post.subSections) {
      const errors = subSectionHasErrors(subSection);
      if (errors) {
        await deleteDoc(doc(storeDB, "posts", id));
        return NextResponse.json(errors, { status: 404 });
      }
    }

    for (let subSection of post.subSections) {
      const subSectionRef = doc(collection(storeDB, "posts", id, "subSection"));

      await setDoc(subSectionRef, {
        ...subSection,
        id: subSectionRef.id,
        createdAt: new Date(),
      });
    }

    const allSubSectionsSS = await getDocs(
      collection(storeDB, "posts", id, "subSection")
    );

    const allSubSections = []; //allSubSectionsSS.map((sub) => sub.data());
    allSubSectionsSS.forEach((sub) => {
      allSubSections.push(sub.data());
    });

    const newPost = await getDoc(doc(storeDB, "posts", id));
    const finishedPost = { ...newPost.data(), subSections: allSubSections };

    return NextResponse.json(finishedPost);
  } catch (error) {
    return NextResponse.error(error.message);
  }
}

export async function PUT(request) {
  try {
    await isAdmin();
    const post = await request.json();

    const errors = postHasErrors(post, "PUT");
    if (errors) {
      return NextResponse.json({ errors }, { status: 404 });
    }

    const postRef = doc(storeDB, "posts", post.id);

    const realPost = await getDoc(postRef);

    if (!realPost.exists()) {
      return NextResponse.json(
        { erros: "This blog does not exist" },
        { status: 404 }
      );
    }
    const update = {
      description: post.description,
    };

    if (post?.image.startsWith("https://drive.google.com/file/d/")) {
      update.image = createGoogleDriveLink(post.image);
    }
    await updateDoc(postRef, update);

    const newPost = await getDoc(postRef);

    return NextResponse.json(newPost.data());
  } catch (error) {
    return NextResponse.error(error.message);
  }
}

export async function DELETE(request) {
  try {
    await isAdmin();
    const { id } = await request.json();

    const allDocs = await getDocs(
      collection(storeDB, "posts", id, "subSection")
    );

    const docIds = [];
    allDocs.forEach((sub) => {
      docIds.push(sub.data().id);
    });
    for (let docId of docIds) {
      await deleteDoc(doc(storeDB, "posts", id, "subSection", docId));
    }

    await deleteDoc(doc(storeDB, "posts", id));
    return NextResponse.json("successfully deleted");
  } catch (error) {
    return NextResponse.error("couldn't delete post");
  }
}
