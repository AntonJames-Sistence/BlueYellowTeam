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
import { isAdmin, subSectionHasErrors } from "../../lib";

export async function GET(request, { params: { postId } }) {
  try {
    const postRef = await getDoc(doc(storeDB, "posts", postId));

    if (postRef.exists()) {
      const post = { ...postRef.data() };
      const allSubSectionsSS = await getDocs(
        collection(storeDB, "posts", postId, "subSection")
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
  } catch (error) {
    return NextResponse.error("Couldn't get post");
  }
}

export async function POST(request, { params: { postId } }) {
  try {
    await isAdmin();
    const { subSections } = await request.json();

    for (let subSection of subSections) {
      const errors = subSectionHasErrors(subSection);
      if (errors) {
        return NextResponse.json(errors, { status: 404 });
      }
    }

    const postRef = doc(storeDB, "posts", postId);
    const post = await getDoc(postRef);
    if (!post.exists()) {
      return NextResponse.json(
        { errors: "Post doesn't exist" },
        { status: 404 }
      );
    }

    for (let subSection of subSections) {
      const newSubSectionRef = doc(
        collection(storeDB, "posts", postId, "subSection")
      );

      await setDoc(newSubSectionRef, {
        title: subSection.title,
        text: subSection.text,
        id: newSubSectionRef.id,
        createdAt: new Date(),
      });
    }
    const allSubSectionsSS = await getDocs(
      collection(storeDB, "posts", postId, "subSection")
    );

    const allSubSections = [];
    allSubSectionsSS.forEach((sub) => {
      allSubSections.push(sub.data());
    });

    return NextResponse.json(allSubSections);
  } catch (error) {
    return NextResponse.error("failed to create subSections");
  }
}

export async function PUT(request, { params: { postId } }) {
  try {
    await isAdmin();
    const { subSections } = await request.json();

    for (let subSection of subSections) {
      const errors = subSectionHasErrors(subSection);
      if (errors) {
        return NextResponse.json(errors, { status: 404 });
      }
    }

    const postRef = doc(storeDB, "posts", postId);
    const post = await getDoc(postRef);
    if (!post.exists()) {
      return NextResponse.json(
        { errors: "Post doesn't exist" },
        { status: 404 }
      );
    }

    for (let subSection of subSections) {
      await updateDoc(
        doc(storeDB, "posts", postId, "subSection", subSection.id),
        {
          title: subSection.title,
          text: subSection.text,
        }
      );
    }

    return NextResponse.json("Successfully updated subSections");
  } catch (error) {
    return NextResponse.error("Failed to update subSections");
  }
}

export async function DELETE(request, { params: { postId } }) {
  try {
    await isAdmin();
    const { id } = await request.json();
    await deleteDoc(doc(storeDB, "posts", postId, "subSection", id));
    return NextResponse.json("SubSection successfully deleted");
  } catch (error) {
    return NextResponse.error("coundn't delete subSection");
  }
}
