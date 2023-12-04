import React from "react";
import getPost from "../../hooks/getPost";
import { notFound } from "next/navigation";
import BlogForm from "../../components/BlogForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function page({ params: { postId } }) {
  const blog = await getPost(postId);
  const session = await getServerSession();
  if (!blog) return notFound();
  if (!session) redirect("/blog");
  return (
    <div className="pt-10 px-10 w-full max-w-7xl">
      <div className="text-3xl">Edit Blog</div>
      <BlogForm blog={JSON.parse(JSON.stringify(blog))} />;
    </div>
  );
}
