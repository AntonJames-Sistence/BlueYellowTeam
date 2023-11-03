import { allProjects } from '../../../data/projects';

export default function ProjectPage({ params: { slug } }) {
  const project = allProjects.find((project) => project.slug === slug);
  return (
    <div className="pt-24 min-h-[100vh]">
      <div className="p-5">
        <div className="text-3xl mt-0 mb-2 text-gray-700">{project.title}</div>
        <div className="text-3xl mt-0 mb-2 text-gray-700">{project.para}</div>
      </div>
    </div>
  );
}
