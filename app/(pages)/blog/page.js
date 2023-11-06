import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PostLayout from "./components/PostLayout";
import getAllPost from "./hooks/getAllPost";
import PageHeader from "../components/PageHeader";

export default async function Blog() {
  const allBlogs = await getAllPost();

  return (
    <div className="flex flex-col items-center justify-start p-5">
      <PageHeader title={"Welcome To Blue & Yellow foundations blog!"} />
      <div className="pt-24 min-h-[100vh] w-full grid grid-cols-3 px-10 gap-5 auto-rows-auto">
        {allBlogs.map((post) => (
          <PostLayout key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
