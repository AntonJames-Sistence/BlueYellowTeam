import { allProjects } from "../../../../data/projects";
import PageHeader from "../../components/PageHeader";

export default function ProjectIndexPage({ params: { slug } }) {
  const project = allProjects.find((project) => project.slug === slug);
  return (
    <div className="pt-24 min-h-[100vh]">
      <PageHeader title={project.title} />
      <div className="pt-24">
        <div className="text-3xl mt-0 mb-2 text-gray-700">{project.para}</div>
      </div>
    </div>
  );
}
