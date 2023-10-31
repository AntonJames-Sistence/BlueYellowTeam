import React from "react";
import SingleProjects from "./components/SingleProjects";

export default async function Project() {
  const request = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });
  const allProjects = await request.json();
  return (
    <div id="FeaturedProjects" className="pt-24">
      <div
        id="featured-project-title"
        className="text-center text-3xl text-gray-500 pb-3"
      >
        WHO DO WE HELP?
      </div>
      <div
        id="projects-cont"
        className="flex flex-wrap p-2.5 gap-5 md:flex-row flex-col"
      >
        {allProjects.map((item) => (
          <SingleProjects
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            para={item.para}
          />
        ))}
      </div>
    </div>
  );
}
