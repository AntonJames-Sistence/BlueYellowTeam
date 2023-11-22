import React from "react";

export default function useBlogSub(blog) {
  if (!blog) return [];

  return Object.values(blog.subSections).map((section) => ({
    ...section,
    psudeoId: blog.id ?? uuidv4(),
  }));
}
