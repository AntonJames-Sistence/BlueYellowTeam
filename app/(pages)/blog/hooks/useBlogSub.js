import React from "react";

export default function useBlogSub(blog) {
  if (!blog) return [];

  return Object.values(blog.subSections).map((section) => ({
    ...section,
    pseudoId: section.id ?? uuidv4(),
  }));
}
