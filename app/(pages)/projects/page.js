import ImageTextContainer from "../../../components/ui/ImageTextContainer";
import getAllProjects from "./hooks/getAllProjects";
import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function ProjectsPage() {
  const allProjects = await getAllProjects();
  const session = await getServerSession();

  return (
    <div className="pt-8">
      <div className="flex flex-row justify-between">
        <div className="text-4xl pl-6 text-black-500 font-bold mb-4 md:text-left">Projects</div>
        {session && (
          <div className="flex justify-end px-6">
            <Link
              href="/projects/new"
              className="bg-blue-500 text-white font-semibold px-4 py-2 w-fit rounded-md cursor-pointer hover:bg-blue-600 hover:scale-110 transition-in-out duration-300 mb-4"
            >
              Create a Project
            </Link>
          </div>
        )}
      </div>

      <div className="grid gap-8 md:flex-row px-5 w-full max-w-[1400px] grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
        {allProjects.map((item, index) => {
          return (
            <ImageTextContainer
              key={index}
              link={`/projects/${item.id}`}
              img={item.image}
              title={item.title}
              para={item.description}
              projectId={item.id}
              path="/projects"
            />
          );
        })}
      </div>
    </div>
  );
}
