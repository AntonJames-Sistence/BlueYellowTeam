import { collection, getDocs } from "firebase/firestore";
import { storeDB } from "../../../../data/firebase";

export default async function getAllPost() {
  const allProjectsSS = await getDocs(collection(storeDB, "projects"));
  const data = [];

  allProjectsSS.forEach((doc) => {
    data.push(doc.data());
  });

  if (!data.length) return undefined;

  const allPost = data.sort(
    (a, b) => b.createdAt.seconds - a.createdAt.seconds
  );
  return allPost;
}
