import { collection, getDocs } from "firebase/firestore";
import { storeDB } from "../../../../data/firebase";

export default async function getAllPost() {
  const allPostSS = await getDocs(collection(storeDB, "posts"));
  const data = [];

  allPostSS.forEach((doc) => {
    data.push(doc.data());
  });

  if (!data.length) return undefined;

  const allPost = data.sort(
    (a, b) => b.createdAt.seconds - a.createdAt.seconds
  );
  return allPost;
}
