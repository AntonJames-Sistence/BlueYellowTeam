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

const isAdmin = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    throw new Error("You are not an admin");
  }
};

const postHasErrors = (post) => {
  const errors = {};

  if (!post.title) errors.title = "Blog post missing title";
  if (!post.text) errors.text = "Blog post missing text";
  if (!post.img && !post.video) errors.media = "Blog need an image or a video";

  if (Object.values(errors).length) return errors;
  return false;
};

export async function GET() {
  try {
    const allPostSS = await getDocs(collection(storeDB, "posts"));
    const data = [];

    allPostSS.forEach((doc) => {
      data.push(doc.data());
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

    const errors = postHasErrors(post);
    if (errors) {
      return NextResponse.json({ errors });
    }

    const newPostRef = doc(collection(storeDB, "posts"));

    await setDoc(newPostRef, {
      ...post,
      createdAt: new Date(),
      id: newPostRef.id,
    });

    const newPost = await getDoc(newPostRef);

    return NextResponse.json(newPost.data());
  } catch (error) {
    return NextResponse.error(error.message);
  }
}

export async function PUT(request) {
  try {
    await isAdmin();
    const post = await request.json();

    const errors = postHasErrors(post);
    if (errors) {
      return NextResponse.json({ errors });
    }
    console.log("postid", post.id);
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
    await isAdmin();
    const { id } = await request.json();
    await deleteDoc(doc(storeDB, "posts", id));
    return NextResponse.json("successfully deleted");
  } catch (error) {
    return NextResponse.error("couldn't delete post");
  }
}
