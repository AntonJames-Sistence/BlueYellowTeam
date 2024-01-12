"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProjectForm({ project }) {
  const [title, setTitle] = useState(project ? project.title : "");
  const [description, setDescription] = useState(
    project ? project.description : ""
  );
  const [image, setImage] = useState(project ? project.image : "");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const projectErrors = (project) => {
    const errors = {};
    if (!project.title.length) errors.title = "Project must have a title";
    if (!project.description.length)
      errors.description = "Project must have a description";
    if (!project.image.length) errors.image = "Project must have a image";
    if (Object.keys(errors).length) return errors;
    return false;
  };

  const handleSubmit = async () => {
    const newProject = { title, description, image };
    const errors = projectErrors(newProject);

    if (errors) {
      setErrors(errors);
      return;
    }

    if (project) {
      newProject.id = project.id;
      const res = await fetch(`/api/projects/${project.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newProject),
      });

      if (res.ok) {
        router.push("/projects");
      }
    } else {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newProject),
      });

      const newidk = await res.json();

      if (res.ok) {
        router.push("/projects");
      }
    }
  };
  return (
    <div>
      <div className="flex flex-col mt-2">
        <label
          className={`font-semibold ${errors.title ? "text-red-500" : ""}`}
        >
          {errors.title ?? "Title"}
        </label>
        {project ? (
          <div className="p-2 text-xl">{title}</div>
        ) : (
          <input
            className="border-2 p-2 rounded-md"
            type="text"
            placeholder="Enter a Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        )}
      </div>

      <div className="flex flex-col mt-2">
        <label
          className={`font-semibold ${
            errors.description ? "text-red-500" : ""
          }`}
        >
          {errors.description ?? "Description"}
        </label>
        <textarea
          className="border-2 p-2 rounded-md"
          type="text"
          placeholder="Enter a description"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex flex-col mt-2">
        <label
          className={`font-semibold ${errors.image ? "text-red-500" : ""}`}
        >
          {errors.image ?? "Image Link"}
        </label>
        <input
          className="border-2 p-2 rounded-md"
          type="text"
          placeholder="Google drive link ex: https://drive.google.com/file/d/12_glIBhssLLh3Bs856k_r3mEK37EO_24/view?usp=sharing"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="w-full flex justify-end mt-4">
        <button
          onClick={handleSubmit}
          className="py-2 px-4 bg-yellow-400 hover:bg-yellow-500 rounded-md font-semibold"
        >
          {project ? "Edit Project" : "Create Project"}
        </button>
      </div>
    </div>
  );
}
