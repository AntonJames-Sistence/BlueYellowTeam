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

export async function POST(request) {
  try {
    const email = await request.json();

    const docRef = await addDoc(collection(storeDB, "emails"), {
      email,
    });

    return NextResponse.json("email saved");
  } catch (error) {
    return NextResponse.error(error.message);
  }
}
