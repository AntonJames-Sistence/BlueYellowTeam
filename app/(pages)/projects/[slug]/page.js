import { allProjects } from "../../../../data/projects";
import PageHeader from "../../components/PageHeader";
import "./style.css";
import Button from "../../../components/Button";

export default function ProjectIndexPage({ params: { slug } }) {
  const project = allProjects.find((project) => project.slug === slug);
  return (
    <div className="flex justify-center w-full py-10">
      <div>
        <Button
            css="text-gray-800 px-4 py-2 rounded-full text-sm md:text-base font-bold transition-colors duration-200 bg-yellow-400 hover:bg-yellow-500"
            text="« All Projects"
            url="/projects"
        />
        <div id="project-cont">
          <div id="title">{project.title}</div>
          <div id="date">{project.date}</div>
          <img id="img" src={`..${project.img}`}></img>
          <div id="para">{project.para}</div>
        </div>
      </div>
    </div>
  );
}
