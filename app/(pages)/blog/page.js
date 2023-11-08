import React from "react";
import { getServerSession } from "next-auth";
import PostLayout from "./components/PostLayout";
import getAllPost from "./hooks/getAllPost";
import PageHeader from "../components/PageHeader";
import { notFound } from "next/navigation";

export default async function Blog() {
  const allBlogs = await getAllPost();

  if (!allBlogs) return notFound();

  return (
    <div className="w-full pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
      {allBlogs.map((post) => (
        <PostLayout key={post.id} post={post} />
      ))}
    </div>
  );
}
