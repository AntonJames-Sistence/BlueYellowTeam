"use client";
import { React, useState } from "react";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

export default function UpdateFacebookBtn() {
  const [ isLoading, setIsLoading ] = useState(false);
  const session = useSession();

  const handleClick = async () => {
    setIsLoading(true);
    const res = await fetch("api/facebook", {
      method: "PUT",
    });
    if (res.ok) {
      const data = await res.json();
      toast.success("Facebook post Updated!");
    } else {
      toast.error("Failed to update facebook post");
    }
    setIsLoading(false);
  };
  if (!session?.data) return;
  return (
    isLoading ?
    (
      <div className="flex items-center justify-center h-[10vh]">
        <div id="load" className="text-3xl font-bold text-shadow-lg">
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
      </div>
    ) : (
      <div
        className="bg-yellow-400 font-semibold px-3 py-1 w-fit rounded-md cursor-pointer hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 transition-colors duration-200 mb-4"
        onClick={handleClick}
      >
        <Toaster position="top-right" reverseOrder={false} />
        Update Facebook post
      </div>
    )
  );
}
