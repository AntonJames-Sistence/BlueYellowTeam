import React from "react";
import { getServerSession } from "next-auth";
import PostLayout from "./components/PostLayout";
import getAllPost from "./hooks/getAllPost";
import Button from "./components/Button";
import { notFound } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default async function Blog() {
  const allBlogs = await getAllPost();
  const session = await getServerSession();

  if (!allBlogs) return notFound();

  return (
    <div className="pt-10 px-5 w-full max-w-[1400px] ">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="mb-2 flex justify-end w-full">
        {session && (
          <Button
            text="Create new blog"
            url="/blog/new"
            css="bg-yellow-400 rounded-3xl px-4 py-2 hover:bg-yellow-500 mb-2 font-semibold transition-colors ease-in "
          />
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 grid-rows-2">
        {allBlogs.map((post) => (
          <PostLayout key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
