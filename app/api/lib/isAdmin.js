import { getServerSession } from "next-auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default async function isAdmin() {
  const session = await getServerSession();
  if (!session || !session.user) {
    throw new Error("You are not an admin");
  }

  // signInWithEmailAndPassword(
  //   auth,
  // )
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log(user);
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });
}
