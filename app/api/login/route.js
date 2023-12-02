import { storeDB, auth } from "../../../data/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  const user = await signInWithEmailAndPassword(
    auth,
    "james.hernandez1225@gmail.com",
    "blue&yellowadmin"
  );

  console.log(user);
  return NextResponse.json("idk");
}
