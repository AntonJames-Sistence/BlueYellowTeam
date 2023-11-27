"use client";
import React, { useState, useEffect } from "react";
import BlogForm from "../components/BlogForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NewBlog() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session.data) {
      router.push("/blog");
    }
  });

  return (
    <div className="pt-10 px-10 w-full max-w-7xl">
      <div className="text-3xl">Create New Blog</div>
      <BlogForm />
    </div>
  );
}
