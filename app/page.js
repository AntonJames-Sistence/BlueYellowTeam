import Link from "next/link";
import { sampleData } from "../data/facebook";
import { allProjects, landingPageDescriptions } from "../data/projects";
import Login from "./components/LoginButton";
import FacebookPost from "./components/FacebookPost";
import MainProjectCard from "./components/MainProjectCard";

import WarClock from "./components/WarClock.jsx";

export default async function Home() {
  const request = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });
  const allProjects = await request.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row w-full justify-between">
        <div className="flex">
          <div
            className="w-32 h-16 bg-contain mb-8 mr-8 bg-no-repeat"
            style={{ backgroundImage: `url(./blue-yellow-logo.png)` }}
          ></div>
          <WarClock />
          <Login />
        </div>
        <Link href="/donate">
          <button
            className="flex h-12 w-32
                        bg-gradient-to-b
                        from-blue-500 to-yellow-500
                        hover:from-indigo-600
                        hover:to-orange-600
                        text-black text-l
                        hover:text-white
                        font-bold
                        shadow-md
                        rounded-2xl
                        items-center
                        justify-center
                        hover:scale-125
                        ease-in-out duration-300
                        self-center"
          >
            Donate
          </button>
        </Link>
      </div>
      <div>
        <div
          className="relative w-full overflow-hidden"
          style={{ borderRadius: "50px" }}
        >
          <div className="relative">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-negative"
              src="./flag_bg.mp4"
              autoPlay
              loop
              muted
              controls={false}
            ></video>

            <div className="flex w-full h-96 rounded-xl">
              <div className="flex flex-col justify-center p-5 w-1/2 z-10">
                <div className="text-4xl text-yellow-400 font-bold leading-snug text-shadow-lg mb-4">
                  STAND WITH LOVE STAND WITH UKRAINE
                </div>
                <div className="text-blue-600 font-bold text-lg leading-tight text-shadow-sm mb-20">
                  100% OF PROFIT GOES TO SUPPORT UKRAINIANS IN NEED
                </div>
              </div>
              <div
                className="w-1/2 h-full bg-cover bg-no-repeat rounded-r-xl z-10"
                style={{ backgroundImage: `url(./intro_banner.png)` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-24">
          <h3 className="text-2xl flex justify-center items-center px-10 py-4">
            {landingPageDescriptions[1]}
          </h3>
        </div>
      </div>
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
          {allProjects.map((item, index) => (
            <MainProjectCard
              key={index}
              id={item.id}
              img={item.img}
              title={item.title}
              para={item.para}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 pt-24">
        <h3 className="text-2xl flex justify-center items-center px-10 py-4">
          {landingPageDescriptions[2]}
        </h3>
        <img className="rounded-md" src="./team.jpeg" alt="" />
      </div>
      <div>
        <h3>{landingPageDescriptions[1]}</h3>
        <img src="/intro_banner.png" alt="" />
      </div>
      <div className="pt-10">
        <div className="text-4xl text-center mb-12">Updates From Facebook</div>
        <div className="flex flex-wrap justify-between">
          {sampleData.map((post, index) => {
            return <FacebookPost key={index} post={post} />;
          })}
        </div>
      </div>
    </main>
  );
}
