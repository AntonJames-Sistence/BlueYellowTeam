"use client";
import React from "react";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

export default function UpdateFacebookBtn() {
  const handleClick = async () => {
    const res = await fetch("api/facebook", {
      method: "PUT",
    });
    if (res.ok) {
      const data = await res.json();
      toast.success("Facebook post Updated!");
    } else {
      toast.error("Failed to update facebook post");
    }
  };
  return (
    <div
      className="bg-yellow-400 font-semibold px-3 py-1 w-fit rounded-md cursor-pointer hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 transition-colors duration-200 mb-4"
      onClick={handleClick}
    >
      <Toaster position="top-right" reverseOrder={false} />
      Update Facebook post
    </div>
  );
}
