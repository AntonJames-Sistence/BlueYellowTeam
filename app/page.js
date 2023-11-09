import { whoWeHelp } from "../data/whowehelp";
import PastUpcomingEvents from "./components/PastUpcomingEvents";
import Facebook from "./components/Facebook";
import Link from "next/link";
import ImageTextContainer from "../components/ui/ImageTextContainer";
import { allProjects } from "../data/projects";
import Banner from "./components/Banner";
import Youtube from "./components/youtube";
import { whyDonate } from "../data/whyDonate";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      {/* Banner & YouTube sections */}
      <Banner />
      <Youtube />
      {/* DONATE SECTION */}
      <div id="who-we-help" className="pt-20 w-11/12 max-w-[1400px]">
        <div className="text-center md:text-left text-5xl font-bold text-black-500 pb-3">
          Who do we help?
        </div>
        <div className="text-center md:text-left w-full md:w-1/2 text-xl pb-5">
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
      <div id="events" className="pt-20 w-11/12 max-w-[1400px]">
        <div className="text-center md:text-left text-5xl font-bold text-black-500 pb-3">
          Events
        </div>
        <div className="w-full md:w-1/2 text-xl text-center md:text-left">
          Your donations and support provide essential supplies and services to
          the Ukrainian people.
        </div>
        <PastUpcomingEvents />
      </div>

      <div
        id="whyDonate"
        className="pt-20 w-11/12 max-w-[1400px] mb-20 text-center md:text-left"
      >
        <div className="text-center md:text-left text-5xl font-bold text-black-500 pb-3">
          Why you should donate
        </div>
        <div className="w-full md:w-1/2 text-xl text-center md:text-left mb-10">
          Russian forces are targeting Ukrainian civilians at this very moment.
          The people of Ukraine need your support now more than ever.
        </div>

        <Link
          href="/donate"
          className="text-gray-800 px-4 py-2 rounded-full text-sm md:text-base font-bold transition-colors duration-200 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 m-auto"
        >
          Donate Now
        </Link>

        <div className="grid grid-cols-2 grid-rows-2 justify-center md:flex md:justify-between mt-10">
          {whyDonate.map((message, index) => (
            <div className="pb-5" key={index}>
              <div className="text-4xl font-bold text-black-500">
                {message.amount}
              </div>
              <div className="max-w-xs md:max-w-none">{message.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-screen bg-darkTeal h-60 md:h-64 lg:h-72 xl:h-96"></div>

      {/* PROJECTS SECTION */}
      <div id="projects" className="pt-20 w-11/12 max-w-[1400px]">
        <div className="text-center md:text-left text-5xl font-bold text-black-500 pb-3">
          Projects
        </div>
        <div className="text-center md:text-left w-full md:w-1/2 text-xl pb-5">
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
