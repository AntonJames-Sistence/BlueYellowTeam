import { NextResponse } from "next/server";
import {
  collection,
  setDoc,
  doc,
  addDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { storeDB } from "../../../data/firebase";

const postHasErrors = (post) => {
  const errors = {};

  if (!post.title) errors.title = "Blog post missing title";
  if (!post.text) errors.text = "Blog post missing text";
  if (!post.img && !post.video) errors.media = "Blog need an image or a video";

  if (Object.values(errors).length) return errors;
  return false;
};

export async function POST(request) {
  try {
    const post = await request.json();

    const errors = postHasErrors(post);
    if (errors) {
      return NextResponse.json({ errors });
    }

    const checkTitleRef = doc(storeDB, "posts", post.title);
    const alredyExist = await getDoc(checkTitleRef);

    if (alredyExist.exists()) {
      return NextResponse.json({
        errors: "Two blog posts can't have the same title",
      });
    }

    await setDoc(doc(storeDB, "posts", post.title), {
      ...post,
      createdAt: new Date(),
    });

    const newPost = await getDoc(checkTitleRef);

    return NextResponse.json(newPost.data());
  } catch (error) {
    return NextResponse.error(error.message);
  }
}

export async function GET() {
  try {
    const allPostSS = await getDocs(collection(storeDB, "posts"));
    const allPost = {};

    return NextResponse.json("idk");
  } catch (error) {
    return NextResponse.error(error);
  }
}
