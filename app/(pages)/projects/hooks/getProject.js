import { doc, getDoc } from "firebase/firestore";
import { storeDB } from "../../../../data/firebase";

export default async function (projectId) {
  const postRef = await getDoc(doc(storeDB, "projects", projectId));

  if (postRef.exists()) {
    return postRef.data();
  }

  return undefined;
}
