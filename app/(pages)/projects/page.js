import { allProjects } from "../../../data/projects";
import ImageTextContainer from "../../../components/ui/ImageTextContainer";

export default function ProjectsPage() {
  return (
    <div className="flex flex-wrap gap-5 md:flex-row flex-col max-w-7xl pt-24 w-full">
      {allProjects.map((item, index) => {
        return (
          <ImageTextContainer
            key={index}
            link={`/projects/${item.slug}`}
            img={item.img}
            title={item.title}
            para={item.para}
          />
        );
      })}
    </div>
  );
}
