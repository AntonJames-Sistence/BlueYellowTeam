"use client";
import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { FIREBASE_APP } from "../../../../data/firebase";

const auth = getAuth(FIREBASE_APP);

async function syncFirebaseAuth(session) {
  console.log("effct2");
  console.log("session", session);
  if (session && session.firebaseToken) {
    try {
      await signInWithCustomToken(auth, session.firebaseToken);
    } catch (error) {
      console.error("Error signing in with custom token:", error);
    }
  } else {
    auth.signOut();
  }
}

export default function AdminLogin() {
  const session = useSession();
  const handleLogOut = async () => {
    await signOut();
    toast.success("Logged out");
  };

  useEffect(() => {
    if (session?.data?.user) {
      toast.success("Logged In!");
    }
  }, []);

  useEffect(() => {
    console.log("effct");
    syncFirebaseAuth(session);
  }, [session]);

  return (
    <div className="pt-20">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-2xl">AdminLogin</h2>
      {session?.data?.user ? (
        <div
          className="cursor-pointer hover:text-blue-600 w-fit"
          onClick={handleLogOut}
        >
          logout
        </div>
      ) : (
        <div
          className="cursor-pointer hover:text-blue-600 w-fit"
          onClick={() => signIn("google")}
        >
          login
        </div>
      )}
    </div>
  );
}
