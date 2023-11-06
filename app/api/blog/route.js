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
import { getServerSession } from "next-auth";
import { subSectionHasErrors } from "./[postId]/route";

const isAdmin = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    throw new Error("You are not an admin");
  }
};

const postHasErrors = (post) => {
  const errors = {};

  if (!post.title) errors.title = "Blog post missing title";
  if (!post.description) errors.description = "Blog post missing description";
  if (!post.image) errors.media = "Blog needs an image";
  if (!post.subSection || !post.subSection.length)
    errors.subSection = "Blog needs at least one subSection";

  if (Object.values(errors).length) return errors;
  return false;
};

export async function GET() {
  try {
    const allPostSS = await getDocs(collection(storeDB, "posts"));
    const data = [];

    allPostSS.forEach((doc) => {
      const fullPost = { ...doc.data() };
      data.push(fullPost);
    });

    // for (let post of data) {
    //   const allSubSectionsSS = await getDocs(
    //     collection(storeDB, "posts", post.id, "subSection")
    //   );

    //   const allSubSections = []; //allSubSectionsSS.map((sub) => sub.data());
    //   allSubSectionsSS.forEach((sub) => {
    //     allSubSections.push(sub.data());
    //   });

    //   post["subSections"] = allSubSections;
    // }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error("couldn't retreive all blog post");
  }
}

export async function POST(request, res) {
  try {
    // await isAdmin();
    const post = await request.json();

    const errors = postHasErrors(post);
    if (errors) {
      return NextResponse.json({ errors }, { status: 404 });
    }

    const newPostRef = doc(collection(storeDB, "posts"));

    await setDoc(newPostRef, {
      title: post.title,
      description: post.description,
      image: post.image,
      createdAt: new Date(),
      id: newPostRef.id,
    });

    const newPost = await getDoc(newPostRef);

    // if (!newPost.exists()) {
    //   return NextResponse.json(
    //     { errors: "couldn't created new post" },
    //     { status: 404 }
    //   );
    // }

    for (let subSection of post.subSection) {
      const errors = subSectionHasErrors(subSection);
      if (errors) {
        await deleteDoc(doc(storeDB, "posts", newPostRef.id));
        return NextResponse.json(errors, { status: 404 });
      }
    }

    for (let subSection of post.subSection) {
      const subSectionRef = doc(
        collection(storeDB, "posts", newPostRef.id, "subSection")
      );

      await setDoc(subSectionRef, {
        ...subSection,
        id: subSectionRef.id,
        createdAt: new Date(),
      });
    }

    const allSubSectionsSS = await getDocs(
      collection(storeDB, "posts", newPostRef.id, "subSection")
    );

    const allSubSections = []; //allSubSectionsSS.map((sub) => sub.data());
    allSubSectionsSS.forEach((sub) => {
      allSubSections.push(sub.data());
    });

    const finishedPost = { ...newPost.data(), subSections: allSubSections };

    return NextResponse.json(finishedPost);
  } catch (error) {
    return NextResponse.error(error.message);
  }
}

export async function PUT(request) {
  try {
    // await isAdmin();
    const post = await request.json();

    const errors = postHasErrors(post);
    if (errors) {
      return NextResponse.json({ errors }, { status: 404 });
    }

    const postRef = doc(storeDB, "posts", post.id);

    await updateDoc(postRef, {
      ...post,
    });

    const newPost = await getDoc(postRef);

    return NextResponse.json(newPost.data());
  } catch (error) {
    return NextResponse.error(error.message);
  }
}

export async function DELETE(request) {
  try {
    // await isAdmin();
    const { id } = await request.json();
    await deleteDoc(doc(storeDB, "posts", id));
    return NextResponse.json("successfully deleted");
  } catch (error) {
    return NextResponse.error("couldn't delete post");
  }
}
