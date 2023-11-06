import { NextResponse, NextRequest } from "next/server";
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
import { storeDB } from "../../../../data/firebase";

export const subSectionHasErrors = (subSection) => {
  const errors = {};

  if (!subSection.title) errors.title = "SubSection missing title";
  if (!subSection.text) errors.subSection = "SubSection missing text";

  if (Object.values(errors).length) return errors;
  return false;
};

export async function GET(request, { params: { postId } }) {
  const postRef = await getDoc(doc(storeDB, "posts", postId));

  if (postRef.exists()) {
    const post = { ...postRef.data() };
    const allSubSectionsSS = await getDocs(
      collection(storeDB, "posts", post.id, "subSection")
    );

    const allSubSections = []; //allSubSectionsSS.map((sub) => sub.data());
    allSubSectionsSS.forEach((sub) => {
      allSubSections.push(sub.data());
    });

    post["subSections"] = allSubSections;
    return NextResponse.json(post);
  }
  return NextResponse.json(
    { errors: "Couldn't retreieve data" },
    { status: 404 }
  );
}

export async function POST(request, { params: { postId } }) {
  try {
    // isAdmin()
    const subSection = await request.json();

    const errors = subSectionHasErrors(subSection);

    if (errors) {
      return NextResponse.json({ errors }, { status: 404 });
    }

    const postRef = doc(storeDB, "posts", postId);
    const post = await getDoc(postRef);
    if (!post.exists()) {
      return NextResponse.json(
        { errors: "Post doesn't exist" },
        { status: 404 }
      );
    }

    const newSubSectionRef = doc(
      collection(storeDB, "posts", postId, "subSection")
    );

    await setDoc(newSubSectionRef, {
      ...subSection,
      id: newSubSectionRef.id,
    });

    const allSubSectionsSS = await getDocs(
      collection(storeDB, "posts", postId, "subSection")
    );

    const allSubSections = [];
    allSubSectionsSS.forEach((sub) => {
      allSubSections.push(sub.data());
    });

    return NextResponse.json(allSubSections);
  } catch (error) {
    return NextResponse.error("something went wrong");
  }
}

export async function DELETE(request, { params: { postId } }) {
  try {
    //isAdmin()
    const { id } = await request.json();
    await deleteDoc(doc(storeDB, "posts", postId, "subSection", id));
    return NextResponse.json("SubSection successfully deleted");
  } catch (error) {
    return NextResponse.error("coundn't delete subSection");
  }
}
