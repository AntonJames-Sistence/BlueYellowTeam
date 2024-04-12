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

  return (
    <div className="pt-8 px-5 w-full max-w-[1400px] ">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-end w-full">
        {session && (
          <Button
            text="Create new blog"
            url="/blog/new"
            css="bg-yellow-400 rounded-3xl px-4 py-2 hover:bg-yellow-500 mb-2 font-semibold transition-colors ease-in "
          />
        )}
      </div>
      {allBlogs ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.map((post) => (
            <PostLayout key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="w-full text-3xl text-center h-96">
          We haven{"'"}t posted any blogs yet but check back soon!
        </div>
      )}
    </div>
  );
}
