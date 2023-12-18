import { getServerSession } from "next-auth";
import { storeDB } from "../../../data/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function isAdmin() {
  const session = await getServerSession();
  if (!session || !session.user) {
    throw new Error("You are not an admin");
  }
  const adminSnap = await getDoc(doc(storeDB, "admins", session.user.email));
  const admin = adminSnap.exists();

  if (!admin) {
    throw new Error("You are not an admin");
  }

  return;
}
