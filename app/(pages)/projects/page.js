import ImageTextContainer from "../../../components/ui/ImageTextContainer";
import getAllProjects from "./hooks/getAllProjects";

export default async function ProjectsPage() {
  const allProjects = await getAllProjects();

  return (
    <div className="grid gap-8 md:flex-row pt-8 px-5 w-full max-w-[1400px] grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
      {allProjects.map((item, index) => {
        return (
          <ImageTextContainer
            key={index}
            link={`/projects/${item.id}`}
            img={item.image}
            title={item.title}
            para={item.description}
            projectId={item.id}
          />
        );
      })}
    </div>
  );
}
