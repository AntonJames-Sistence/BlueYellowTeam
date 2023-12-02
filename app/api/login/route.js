import { storeDB, auth } from "../../../data/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  const user = await signInWithEmailAndPassword(auth);

  console.log(user);
  return NextResponse.json("idk");
}
