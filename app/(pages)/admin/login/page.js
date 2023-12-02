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
    async function loaduser() {
      if (session?.data?.user) {
        toast.success("Logged In!");
        await fetch("/api/login");
      }
    }

    loaduser();
  }, []);

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
