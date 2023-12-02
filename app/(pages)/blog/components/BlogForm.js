"use client";
import React, { useState } from "react";
import NewBlogSubSec from "./SubSectionForm";
import useBlogSub from "../hooks/useBlogSub";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export default function BlogForm({ blog }) {
  const [title, setTitle] = useState(blog ? blog.title : "");
  const [description, setDescription] = useState(blog ? blog.description : "");
  const [image, setImage] = useState(blog ? blog.image : "");
  const [subSections, setSubSections] = useState(useBlogSub(blog));
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleAddCard = () => {
    setSubSections((state) => {
      return [...state, { pseudoId: uuidv4(), title: "", text: "" }];
    });
  };

  const handleDeleteCard = async (sectionId, id) => {
    if (id) {
      const res = await fetch(`/api/blog/${blog.id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id: sectionId }),
      });
    }
    setSubSections((state) => {
      return state.filter((section) => section.pseudoId != sectionId);
    });
  };

  const handleEditCard = (sectionId, field, newValue) => {
    setSubSections((state) => {
      return state.map((section) => {
        if (section.pseudoId != sectionId) return section;
        return { ...section, [field]: newValue, edited: true };
      });
    });
  };

  const handleSubmit = async () => {
    const errors = {};
    if (!title) errors.title = "Blogs need a title";
    if (!description) errors.description = "Blogs need a description";
    const filteredSubSections = subSections.filter((section) => {
      if (!section.title || !section.text) return true;
      return false;
    });
    if (filteredSubSections.length || !subSections.length)
      errors.subSections =
        "Blogs need atleast one sub section and each sub section needs a title and text";

    if (!image.startsWith("https://drive.google.com/file/d/"))
      errors.image =
        "Google drive link most start with https://drive.google.com/file/d/";
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    const newBlog = { title, description, image, subSections };
    if (blog) {
      newBlog.id = blog.id;
    }

    if (blog) {
      const editedSubSections = [];
      const newSubSections = [];
      for (let subSection of subSections) {
        if (!subSection.id) newSubSections.push(subSection);
        else if (subSection.edited) editedSubSections.push(subSection);
      }

      const newBlogRes = fetch("/api/blog", {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newBlog),
      });

      const newSectionsRes = fetch(`/api/blog/${blog.id}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ subSections: newSubSections }),
      });

      const editedSectionsRes = fetch(`/api/blog/${blog.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ subSections: editedSubSections }),
      });

      Promise.all([newBlogRes, newSectionsRes, editedSectionsRes]).then(
        (values) => {
          router.push("/blog");
        }
      );

      return;
    } else {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newBlog),
      });

      const newidk = await res.json();

      if (res.ok) {
        router.push("/blog");
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col mt-2">
        <label htmlFor="title" className="font-semibold">
          Title
        </label>
        {blog ? (
          <div className="p-2 text-xl">{blog.title}</div>
        ) : (
          <input
            placeholder={errors.title ?? "Enter a title:"}
            className={`border-2 p-2 rounded-md ${
              errors.title ? "placeholder:text-red-600" : ""
            }`}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        )}
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="description" className="font-semibold">
          Description
        </label>
        <textarea
          placeholder={
            errors.description ??
            'Add a description: This will not show up on the individual blog page. The description will only apear on the "all blogs" page and will also be used when a user searches for a blog.'
          }
          className={`border-2 p-2 rounded-md ${
            errors.description ? "placeholder:text-red-600" : ""
          }`}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
        />
      </div>
      <div className="flex flex-col mt-2">
        <label
          htmlFor="image"
          className={`font-semibold ${errors.image ? "text-red-500" : ""}`}
        >
          {errors.image
            ? "Image Link must start with https://drive.google.com/file/d/"
            : "Image link"}
        </label>
        <input
          className="border-2 p-2 rounded-md w-full"
          type="text"
          placeholder="Google drive link ex: https://drive.google.com/file/d/12_glIBhssLLh3Bs856k_r3mEK37EO_24/view?usp=sharing"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
      </div>
      <div className="mt-2">
        Sub sections: <span className="text-red-600">{errors.subSections}</span>{" "}
      </div>
      {subSections.map((section, index) => (
        <NewBlogSubSec
          section={section}
          index={index}
          handleDeleteCard={handleDeleteCard}
          handleEditCard={handleEditCard}
          key={section.pseudoId}
        />
      ))}
      <div className="w-full flex justify-center mt-4">
        <button
          className="py-2 px-4 w-full bg-yellow-400 hover:bg-yellow-500 rounded-md font-semibold"
          onClick={handleAddCard}
        >
          Add Sub Section
        </button>
      </div>
      <div className="w-full flex justify-end mt-4">
        <button
          className="py-2 px-4 bg-yellow-400 hover:bg-yellow-500 rounded-md font-semibold"
          onClick={handleSubmit}
        >
          {blog ? "Edit" : "Create"} Blog
        </button>
      </div>
    </div>
  );
}
