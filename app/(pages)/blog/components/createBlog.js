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
import { FIREBASE_APP, storeDB } from "../../../../data/firebase";

export const subSectionHasErrors = (subSection) => {
  const errors = {};

  if (!subSection.title) errors.title = "SubSection missing title";
  if (!subSection.text) errors.subSection = "SubSection missing text";

  if (Object.values(errors).length) return errors;
  return false;
};

const createId = (title) => {
  const invalid = new Set(["!", ",", "?", "."]);
  const filteredString = title
    .split("")
    .filter((char) => !invalid.has(char))
    .join("");
  const id = filteredString.replace(/ /g, "-");
  return id;
};

const createGoogleDriveLink = (link) => {
  link = link.split("https://drive.google.com/file/d/");
  const viewPosition = link[1].indexOf("/view");
  const linkId = link[1].slice(0, viewPosition);
  return `https://drive.google.com/uc?export=view&id=${linkId}`;
};

export default async function createBlog(post) {
  //   const errors = postHasErrors(post, "POST");

  const id = createId(post.title);

  //   if (await postExist(id)) {
  //     return NextResponse.json(
  //       { errors: "A post already exist with this title" },
  //       { status: 404 }
  //     );
  //   }

  await setDoc(doc(storeDB, "posts", id), {
    title: post.title,
    description: post.description,
    image: createGoogleDriveLink(post.image),
    createdAt: new Date(),
    id: id,
  });

  //   for (let subSection of post.subSections) {
  //     const errors = subSectionHasErrors(subSection);
  //     if (errors) {
  //       await deleteDoc(doc(storeDB, "posts", id));
  //       //   return NextResponse.json(errors, { status: 404 });
  //     }
  //   }

  //   for (let subSection of post.subSections) {
  //     const subSectionRef = doc(collection(storeDB, "posts", id, "subSection"));

  //     await setDoc(subSectionRef, {
  //       ...subSection,
  //       id: subSectionRef.id,
  //       createdAt: new Date(),
  //     });
  //   }

  //   const allSubSectionsSS = await getDocs(
  //     collection(storeDB, "posts", id, "subSection")
  //   );

  //   const allSubSections = []; //allSubSectionsSS.map((sub) => sub.data());
  //   allSubSectionsSS.forEach((sub) => {
  //     allSubSections.push(sub.data());
  //   });

  //   const newPost = await getDoc(doc(storeDB, "posts", id));
  //   const finishedPost = { ...newPost.data(), subSections: allSubSections };

  return "yes";

  //   return NextResponse.json(finishedPost);
}
