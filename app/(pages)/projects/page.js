import { allProjects } from "../../../data/projects";
import ImageTextContainer from "../../../components/ui/ImageTextContainer";

export default function ProjectsPage() {
  return (
    <div className="flex flex-wrap gap-8 md:flex-row flex-col pt-8 px-5 w-full max-w-[1400px]">
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
