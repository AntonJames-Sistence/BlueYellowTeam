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
import {
  isAdmin,
  createGoogleDriveLink,
  createId,
  postHasErrors,
  subSectionHasErrors,
} from "../lib";

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
      return NextResponse.json({ errors }, { status: 400 });
    }

    for (let subSection of post.subSections) {
      const errors = subSectionHasErrors(subSection);
      if (errors) {
        return NextResponse.json(errors, { status: 400 });
      }
    }

    const id = createId(post.title);

    if (await postExist(id)) {
      return NextResponse.json(
        { errors: "A post already exist with this title" },
        { status: 404 }
      );
    }

    if (post.image.startsWith("https://drive.google.com/file/d/")) {
      post.image = createGoogleDriveLink(post.image);
    }

    await setDoc(doc(storeDB, "posts", id), {
      title: post.title,
      description: post.description,
      image: post.image,
      createdAt: new Date(),
      id: id,
    });

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
      return NextResponse.json({ errors }, { status: 400 });
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
