"use client";
import React, { useState } from "react";
import NewBlogSubSec from "./SubSectionForm";
import useBlogSub from "../hooks/useBlogSub";
import { v4 as uuidv4 } from "uuid";

export default function BlogForm({ blog }) {
  const [title, setTitle] = useState(blog ? blog.title : "");
  const [description, setDescription] = useState(blog ? blog.description : "");
  const [image, setImage] = useState("");
  const [subSections, setSubSections] = useState(useBlogSub());

  const handleAddCard = () => {
    setSubSections((state) => {
      return [...state, { pseudoId: uuidv4(), title: "", description: "" }];
    });
  };

  const handleDeleteCard = (sectionId) => {
    setSubSections((state) => {
      return state.filter((section) => section.pseudoId != sectionId);
    });
  };

  return (
    <div>
      <div className="flex flex-col mt-2">
        <label htmlFor="title">Title</label>
        <input
          placeholder="Enter a title:"
          className="border-2 p-2 rounded-md"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="description">Description</label>
        <textarea
          placeholder='Add a description: This will not show up on the individual blog page. The description will only apear on the "all blogs" page and will also be used when a user searches for a blog.'
          className="border-2 p-2 rounded-md"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="image">Upload Image</label>
        <input
          className="border-2 p-2 rounded-md w-fit"
          type="file"
          accept="image/*"
        />
      </div>
      <div className="mt-2">Sub sections:</div>
      {subSections.map((section, index) => (
        <NewBlogSubSec
          section={section}
          index={index}
          handleDeleteCard={handleDeleteCard}
        />
      ))}
      <div className="w-full flex justify-center mt-4">
        <button
          className="py-2 px-4 bg-yellow-400 hover:bg-yellow-500 rounded-3xl font-semibold"
          onClick={handleAddCard}
        >
          Add Sub Section
        </button>
      </div>
    </div>
  );
}
