import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { storeDB } from "../../../../data/firebase";

export default async function getPost(postId) {
  const postRef = await getDoc(doc(storeDB, "posts", postId));

  if (postRef.exists()) {
    const post = { ...postRef.data() };
    const allSubSectionsSS = await getDocs(
      collection(storeDB, "posts", postId, "subSection")
    );

    const allSubSections = [];
    allSubSectionsSS.forEach((sub) => {
      allSubSections.push(sub.data());
    });

    post["subSections"] = allSubSections.sort((a, b) => {
      if (a.createdAt.seconds !== b.createdAt.seconds) {
        return a.createdAt.seconds - b.createdAt.seconds;
      }
      return a.createdAt.nanoseconds - b.createdAt.nanoseconds;
    });

    return post;
  }
  return undefined;
}
