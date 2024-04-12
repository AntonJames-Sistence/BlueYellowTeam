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
    <div className="pt-20">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-3xl bold">Admin Login</h2>
      {session?.data?.user ? (
        <div
          className="bg-blue-400 text-white font-semibold px-10 py-1 w-fit rounded-md cursor-pointer hover:bg-blue-600 hover:scale-110 transition-in-out duration-300 my-10 m-auto"
          onClick={handleLogOut}
        >
          Logout
        </div>
      ) : (
        <div
        className="bg-blue-400 text-white font-semibold px-10 py-1 w-fit rounded-md cursor-pointer hover:bg-blue-600 hover:scale-110 transition-in-out duration-300 my-10 m-auto"
          onClick={() => signIn("google")}
        >
          Login
        </div>
      )}
    </div>
  );
}
