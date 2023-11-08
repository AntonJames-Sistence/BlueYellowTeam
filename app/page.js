import { whoWeHelp } from "../data/whowehelp";
import PastUpcomingEvents from "./components/PastUpcomingEvents";
import Facebook from "./components/Facebook";
import Link from "next/link";
import ImageTextContainer from "../components/ui/ImageTextContainer";
import { allProjects } from "../data/projects";
import Banner from "./components/Banner";
import Youtube from "./components/youtube";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      {/* Banner & YouTube sections */}
      <Banner />
      <Youtube />

      {/* DONATE SECTION */}
      <div id="who-we-help" className="pt-20 max-w-7xl">
        <div className="text-center md:text-left text-5xl font-bold text-black-500 pb-3">
          Who do we help?
        </div>
        <div className="text-center md:text-left w-full md:w-1/2 text-xl">
          Your donations and support provide essential supplies and services to
          the Ukranian people.
        </div>
        <div
          id="who-help-cont"
          className="flex flex-wrap p-2.5 gap-5 md:flex-row flex-col"
        >
          {whoWeHelp.map((item, index) => (
            <ImageTextContainer
              key={index}
              img={item.img}
              title={item.title}
              para={item.para}
              link={"/donate"}
            />
          ))}
        </div>
      </div>

      {/*  EVENTS SECTION */}
      <div id="events" className="pt-20 w-full max-w-7xl">
        <div className="text-center md:text-left text-5xl font-bold text-black-500 pb-3">
          Events
        </div>
        <div className="w-full md:w-1/2 text-xl text-center md:text-left">
          Your donations and support provide essential supplies and services to
          the Ukrainian people.
        </div>
        <PastUpcomingEvents />
      </div>

      {/* PROJECTS SECTION */}
      <div id="projects" className="pt-20 max-w-7xl">
        <div className="text-center md:text-left text-5xl font-bold text-black-500 pb-3">
          Projects
        </div>
        <div className="text-center md:text-left w-full md:w-1/2 text-xl">
          Your donations and support provide essential supplies and services to
          the Ukranian people.
        </div>
        <div
          id="who-help-cont"
          className="flex flex-wrap p-2.5 gap-5 md:flex-row flex-col"
        >
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
      </div>

      <hr className="pt-20 max-w-7xl" />

      <Facebook />
    </main>
  );
}
