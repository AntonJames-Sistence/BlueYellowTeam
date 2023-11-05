"use client";
import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

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

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <h2>AdminLogin</h2>
      {session?.data?.user ? (
        <div onClick={handleLogOut}>logout</div>
      ) : (
        <div onClick={() => signIn("google")}>login</div>
      )}
    </div>
  );
}
