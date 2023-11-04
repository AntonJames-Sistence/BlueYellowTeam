import { allProjects } from '../../../../data/projects';
import PageHeader from '../../components/PageHeader';

export default function ProjectIndexPage({ params: { slug } }) {
  const project = allProjects.find((project) => project.slug === slug);
  return (
    <div className="pt-24 min-h-[100vh] flex flex-col items-center justify-start">
      <PageHeader title={project.title} />
      <div className="w-1/2 flex flex-col items-center pt-10">
        <div
          className="
    flex-1 flex-basis-52 relative rounded-lg h-fit"
        >
          <img
            className="border border-solid border-black w-full object-cover max-h-64"
            src={project.img}
            alt=""
          />
        </div>
        <div className="text-3xl mt-0 mb-2 text-gray-700 pt-10">
          {project.para}
        </div>
      </div>
    </div>
  );
}
