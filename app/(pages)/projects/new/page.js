import React from "react";
import ProjectForm from "../components/ProjectForm";

export default function CreateProject() {
  return (
    <div className="pt-10 px-10 w-full max-w-7xl">
      <div className="text-3xl">Create New A Project</div>
      <ProjectForm />
    </div>
  );
}
