"use client";
import React, { useState } from "react";
import BlogForm from "../components/BlogForm";

export default function NewBlog() {
  return (
    <div className="pt-10 px-10 w-full max-w-7xl">
      <div className="text-3xl">Create New Blog</div>
      <BlogForm />
    </div>
  );
}
