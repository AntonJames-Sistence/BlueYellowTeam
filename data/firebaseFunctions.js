import { getFirestore } from "firebase-admin/firestore";
import "server-only";

export const getBlogs = async () => {
  const firestore = getFirestore();
  const blogSnapshot = await firestore.collection("blogs").get();
  const documents = blogSnapshot.docs.map((blog) => ({
    id: blog.data().id,
    title: blog.data().title,
  }));

  return documents;
};
