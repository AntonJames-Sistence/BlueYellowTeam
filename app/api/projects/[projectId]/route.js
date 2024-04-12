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
import { isAdmin, projectHasErrors, createGoogleDriveLink } from "../../lib";

export async function GET(request, { params: { projectId } }) {
  try {
    const postRef = await getDoc(doc(storeDB, "projects", projectId));

    if (postRef.exists()) {
      const post = { ...postRef.data() };
      return NextResponse.json(post);
    }

    return NextResponse.json(
      { errors: "Couldn't retreieve project" },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.error("Couldn't get project");
  }
}

export async function PUT(request, { params: { projectId } }) {
  try {
    await isAdmin();
    const body = await request.json();

    if (projectHasErrors(body)) {
      return NextResponse.json(
        { error: "Project was missing components" },
        400
      );
    }

    const postRef = doc(storeDB, "projects", projectId);
    const realPost = await getDoc(postRef);

    if (!realPost.exists()) {
      return NextResponse.json(
        { erros: "This blog does not exist" },
        { status: 404 }
      );
    }

    const update = {
      description: body.description,
      image: body.image,
    };

    if (body?.image.startsWith("https://drive.google.com/file/d/")) {
      update.image = createGoogleDriveLink(body.image);
    }

    await updateDoc(postRef, update);

    return NextResponse.json("Project successfully updated");
  } catch (error) {
    return NextResponse.error(error.message);
  }
}

export async function DELETE(request, { params: { projectId } }) {
  try {
    // await isAdmin();
    await deleteDoc(doc(storeDB, "projects", projectId));
    return NextResponse.json("successfully deleted");
  } catch (error) {
    return NextResponse.error("couldn't delete post");
  }
}
