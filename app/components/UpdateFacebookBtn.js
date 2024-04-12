"use client";
import { React, useState } from "react";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import clearCache from "../helpers/clearCache";

export default function UpdateFacebookBtn() {
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();

  const handleClick = async () => {
    setIsLoading(true);
    const res = await fetch("api/facebook", {
      method: "PUT",
    });
    
    if (res.ok) {
      const data = await res.json();
      toast.success("Facebook post Updated!");
      clearCache("/", "page");
    } else {
      toast.error("Failed to update facebook post");
    }
    setIsLoading(false);
  };
  if (!session?.data) return;
  return isLoading ? (
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
      className="bg-blue-500 text-white font-semibold px-4 py-2 w-fit rounded-md cursor-pointer hover:bg-blue-600 hover:scale-110 transition-in-out duration-300 mb-4 m-auto"
      onClick={handleClick}
    >
      Update Facebook Posts
    </div>
  );
}
