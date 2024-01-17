import ImageTextContainer from "../../../components/ui/ImageTextContainer";
import getAllProjects from "./hooks/getAllProjects";
import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function ProjectsPage() {
  const allProjects = await getAllProjects();
  const session = await getServerSession();

  return (
    <div className="pt-8">
      {session && (
        <div className="flex justify-end px-6 mb-4">
          <Link
            href="/projects/new"
            className="bg-yellow-400 rounded-3xl px-4 py-2 hover:bg-yellow-500 font-semibold transition-colors ease-in"
          >
            Create A Project
          </Link>
        </div>
      )}

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
