import { allProjects } from "../../../../data/projects";
import PageHeader from "../../components/PageHeader";
import Button from "../../../components/Button";
import Image from "next/image";
import getProject from "../hooks/getProject";
import { notFound } from "next/navigation";

export default async function ProjectIndexPage({ params: { slug } }) {
  const project = await getProject(slug);
  if (!project) return notFound();

  return (
    <div className="flex justify-center w-full mt-6">
      <div className="mx-4 lg:mx-0">
        <Button
          css="text-black px-4 py-1 rounded-full text-xs md:text-sm font-bold transition-colors duration-200 bg-yellow-400 hover:bg-yellow-500"
          text="« All Projects"
          url="/projects"
        />
        <div className="max-w-[1000px]">
          <div className="text-3xl text-center md:text-left lg:text-5xl text-bold my-4">
            {project.title}
          </div>
          <div className="text-gray-700 flex flex-col md:flex-row">
            <Image
              src={`${project.image}`}
              width={1000}
              height={600}
              className="object-cover rounded-xl md:w-1/2 h-auto"
              alt="project image"
            />
            <div className="mt-4 md:ml-4 md:mt-0 flex flex-col justify-between">
              <div className="text-base md:text-xl">{project.description}</div>
              <div className="text-sm lg:text-xl mt-2 font-bold">
                {project.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
