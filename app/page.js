import { whoWeHelp } from "../data/whowehelp";
import PastUpcomingEvents from "./components/PastUpcomingEvents";
import Facebook from "./components/Facebook";
import Link from "next/link";
import ImageTextContainer from "../components/ui/ImageTextContainer";
import { allProjects } from "../data/projects";
import Banner from "./components/Banner";
import Youtube from "./components/youtube";
import { whyDonate } from "../data/whyDonate";
import HomeEvents from "./components/HomeEvents";
import UpdateEventsBtn from "./components/UpdateEventsBtn";
import UpdateFacebookBtn from "./components/UpdateFacebookBtn";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      {/* Banner & YouTube sections */}
      <Banner />
      <Youtube />
      {/* DONATE SECTION */}
      <div id="who-we-help" className="pt-28 w-11/12 max-w-[1400px]">
        <div className="text-center md:text-left text-5xl font-bold text-black-500 pb-3">
          Who do we help?
        </div>
        <div className="text-center md:text-left w-full md:w-1/2 text-xl pb-5">
          Your donations and support provide essential supplies and services to
          the Ukranian people.
        </div>
        <div
          id="who-help-cont"
          className="flex flex-wrap py-2.5 gap-5 md:flex-row flex-col"
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
      <div id="events" className="pt-28 w-11/12 max-w-[1400px]">
        <div className="text-center md:text-left text-5xl font-bold text-black-500 pb-3">
          Events
        </div>
        <div className="w-full md:w-1/2 text-xl text-center md:text-left pb-12 sm:pb-7">
          Your donations and support provide essential supplies and services to
          the Ukrainian people.
        </div>
        <UpdateEventsBtn />
        <HomeEvents />
      </div>
      <div
        id="whyDonate"
        className="pt-28 w-11/12 max-w-[1400px] mb-20 text-center md:text-left"
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

        <div className="grid grid-cols-2 grid-rows-2 justify-center md:flex md:justify-between mt-20">
          {whyDonate.map((message, index) => (
            <div
              className="pb-5 text-left flex flex-col w-full md:w-1/4 max-[768px]:items-center"
              key={index}
            >
              <div className="w-min">
                <div className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-black-500 w-fit">
                  {message.amount}
                </div>
                <div className="w-40 md:w-full mt-2">{message.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div
          className="w-screen h-56 md:h-96 bg-cover bg-no-repeat bg-[url('/people3.jpg')]"
        ></div>
        <div className="absolute top-0 right-0 w-1/3 md:w-1/3 h-full">
          <div className="h-full bg-blue-500 bg-opacity-60 w-full transform  origin-bottom-left">
            <div className="triangle h-full aspect-[1/2] absolute -translate-x-full"></div>
          </div>
        </div>
      </div>
      {/* PROJECTS SECTION */}
      <div id="projects" className="pt-28 w-11/12 max-w-[1400px]">
        <div className="text-center md:text-left text-5xl font-bold text-black-500 pb-3">
          Projects
        </div>
        <div className="text-center md:text-left w-full md:w-1/2 text-xl pb-5">
          Your donations and support provide essential supplies and services to
          the Ukranian people.
        </div>
        <div
          id="who-help-cont"
          className="flex flex-wrap py-2.5 gap-5 md:flex-row flex-col"
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
        <div className="w-full flex justify-center mt-5">
          <Button
            css="text-black px-4 py-2 rounded-full text-sm md:text-base font-bold transition-colors duration-200 bg-yellow-400 hover:bg-yellow-500"
            text="View All Projects"
            url="/projects"
          />
        </div>
      </div>
      <hr className="pt-28 max-w-7xl" />
      <UpdateFacebookBtn />
      <Facebook />
    </main>
  );
}
