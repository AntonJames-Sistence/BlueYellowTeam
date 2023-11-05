import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PostForm from "./components/PostForm";
export default async function Blog() {
  const session = await getServerSession();
  const isAdmin = session?.user;
  if (!isAdmin) {
    redirect("/admin/login");
  }
  return (
    <div>
      <h1 className="text-3xl">Welcome To Blue & Yellow foundation's blog!</h1>
      <PostForm />
    </div>
  );
}
