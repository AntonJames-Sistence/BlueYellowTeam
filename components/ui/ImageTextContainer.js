import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import ProjectMenu from "../../app/(pages)/projects/components/ProjectMenu";

export default async function ImageTextContainer({
  img,
  title,
  para,
  link,
  onClick,
  projectId,
  path,
}) {
  const session = await getServerSession();
  return (
    <>
      {!onClick ? (
        <Link
          href={link}
          className="
            project-card
            flex-1 flex-basis-52
            relative rounded-lg
            bg-white shadow-md
            hover:shadow-xl hover:scale-[105%]
            ease-in-out duration-300"
        >
          {projectId && session && (
            <ProjectMenu projectId={projectId} path={path} />
          )}
          <div className="h-64 w-full relative rounded-t-lg">
            <img
              className="w-full h-full object-cover object-top rounded-t-lg"
              src={img}
              fill="true"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt="Image blog post"
            />
          </div>
          <div className="p-4">
            <div className="text-2xl mt-0 mb-2 text-black font-semibold">
              {title}
            </div>
            <hr />
            <div className="mt-2 text-base md:text-sm lg:text-base text-gray-700">
              {para}
            </div>
          </div>
        </Link>
      ) : (
        <div
          onClick={onClick}
          className="project-card
  flex-1 flex-basis-52 relative border border-solid border-black rounded-lg bg-white cursor-pointer"
        >
          <img
            className="rounded-t-lg object-cover"
            src={img}
            alt={`${img} image`}
            priority={true}
          />
          <div className="p-10 pt-5">
            <div className="text-3xl mt-0 mb-2 text-gray-700">{`Donate to ${title}`}</div>
            <div className="text-14 leading-2 tracking-wide text-gray-700">
              {para}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
