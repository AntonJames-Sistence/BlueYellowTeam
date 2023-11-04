"use client";
import { whoWeHelp } from "../data/whowehelp";
import { useEffect, useState } from "react";
import WhoWeHelp from "./components/WhoWeHelp";
import Youtube from "./components/youtube";
import HomeProjects from "./components/HomeProjects";
import HomeEvents from "./components/HomeEvents";
import Facebook from "./components/Facebook";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between pt-24 p-5">
      <div className="relative w-full overflow-hidden" style={{}}>
        <div className="relative">
          {/* <video
            className="absolute top-0 left-0 w-full h-full object-cover z-negative"
            src="/flag_bg.mp4"
            autoPlay
            loop
            muted
            controls={false}
          ></video> */}

          <div className="flex w-full h-96 min-h-[80vh] ">
            <div className="w-full flex flex-col justify-evenly items-center z-10">
              <div className="text-4xl md:text-6xl text-center md:text-lef text-darkTeal font-bold leading-snug text-shadow-lg">
                STAND WITH LOVE STAND WITH UKRAINE
                <div className="text-darkTeal font-bold text-lg md:text-3xl leading-tight text-shadow-sm mb-5 text-center md:text-left pt-4">
                  100% OF PROFIT GOES TO SUPPORT UKRAINIANS IN NEED
                </div>
              </div>
              <div
                className="w-full h-full md:w-1/2 md:h-1/2 bg-cover bg-no-repeat z-10"
                style={{ backgroundImage: `url(./intro_banner.png)` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* <Youtube /> */}

      <div id="who-we-help" className="pt-36 max-w-7xl">
        <div
          id="who-help-title"
          className="text-center md:text-left text-5xl font-bold text-black-500 pb-3"
        >
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
            <WhoWeHelp
              key={index}
              id={item.id}
              img={item.img}
              title={item.title}
              para={item.para}
            />
          ))}
        </div>
      </div>

      <div id="events" className="pt-36 w-full max-w-7xl">
        <div className="text-center md:text-left text-5xl font-bold text-black-500 pb-3">
          Events
        </div>
        <div className="w-full md:w-1/2 text-xl text-center md:text-left">
          Your donations and support provide essential supplies and services to
          the Ukrainian people.
        </div>
        <HomeEvents />
      </div>

      <div id="projects" className="mt-36">
        <div
          id="featured-project-title"
          className="text-left text-5xl font-bold text-black-500 pb-7"
        >
          Projects
        </div>
        <div
          id="projects-cont"
          className="flex flex-wrap gap-5 md:flex-row flex-col max-w-7xl"
        >
          <HomeProjects />
        </div>
      </div>

      <Facebook />
    </main>
  );
}
