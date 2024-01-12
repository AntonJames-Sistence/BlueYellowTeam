import React from "react";
import ProjectForm from "../../components/ProjectForm";
import getProject from "../../hooks/getProject";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function EditProject({ params: { slug } }) {
  const project = await getProject(slug);
  const session = await getServerSession();
  if (!project) return notFound();
  if (!session) redirect("/blog");

  return (
    <div className="pt-10 px-10 w-full max-w-7xl">
      <div className="text-3xl">Edit Project</div>
      <ProjectForm project={JSON.parse(JSON.stringify(project))} />
    </div>
  );
}
