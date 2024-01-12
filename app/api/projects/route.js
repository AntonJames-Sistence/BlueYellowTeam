import { NextResponse } from "next/server";
import { collection, setDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { storeDB } from "../../../data/firebase";
import {
  isAdmin,
  createGoogleDriveLink,
  createId,
  projectHasErrors,
} from "../lib";

const projectExist = async (id) => {
  const postSnap = await getDoc(doc(storeDB, "projects", id));
  return postSnap.exists();
};

export async function GET() {
  try {
    const allPostSS = await getDocs(collection(storeDB, "projects"));
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

export async function POST(request) {
  try {
    // await isAdmin();
    const body = await request.json();

    if (projectHasErrors(body)) {
      return NextResponse.json(
        { error: "Project was missing components" },
        400
      );
    }

    const id = createId(body.title);

    if (await projectExist(id)) {
      return NextResponse.json(
        { errors: "A post already exist with this title" },
        { status: 404 }
      );
    }
    //   image: createGoogleDriveLink(body.image)

    await setDoc(doc(storeDB, "projects", id), {
      title: body.title,
      description: body.description,
      image: body.image,
      createdAt: new Date(),
      id: id,
    });

    return NextResponse.json("Project successfully created");
  } catch (error) {
    return NextResponse.error(error.message);
  }
}
