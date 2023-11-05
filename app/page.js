import { whoWeHelp } from '../data/whowehelp';
import WhoWeHelp from './components/WhoWeHelp';
import HomeProjects from './components/HomeProjects';
import HomeEvents from './components/HomeEvents';
import Facebook from './components/Facebook';
import Banner from "./components/Banner";
import Youtube from "./components/youtube";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between pt-24 p-5">
      
      <Banner />
      <Youtube />

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

      <div className="w-full pt-36 flex items-center">
        <Facebook />
      </div>
    </main>
  );
}