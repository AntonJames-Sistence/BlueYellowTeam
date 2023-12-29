import { allProjects } from "../../../../data/projects";
import PageHeader from "../../components/PageHeader";
import "./style.css";
import Button from "../../../components/Button";
import Image from "next/image";

export default function ProjectIndexPage({ params: { slug } }) {
  const project = allProjects.find((project) => project.slug === slug);

  return (
    <div className="flex justify-center w-full mt-12">
      <div className="mx-4 lg:mx-0">
        <Button
            css="text-gray-800 px-4 py-2 rounded-full text-sm md:text-base font-bold transition-colors duration-200 bg-yellow-400 hover:bg-yellow-500"
            text="« All Projects"
            url="/projects"
        />
        <div className="max-w-[1000px]">
          <div className="text-3xl text-center lg:text-left lg:text-5xl text-bold my-4">{project.title}</div>
          <Image 
            className="object-cover" 
            src={`${project.img}`} 
            width={1000}
            height={10}
          />
          <div className="text-sm lg:text-xl">{project.date} 30.10</div>
          <div className="text-base lg:text-2xl mt-4">{project.para}</div>
        </div>
      </div>
    </div>
  );
}
