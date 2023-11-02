"use client";
import { landingPageDescriptions } from "../data/projects";
import { useEffect, useState, useRef } from "react";
import Youtube from "./components/youtube";
import Event from "./events/components/Event";
import TeamMembers from "./components/TeamMembers";
import HomeProjects from "./components/HomeProjects";
import FacebookPost from "./components/FacebookPost";

export default function Home() {
  const eventSwiperRef = useRef();
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      const request = await fetch("http://localhost:3000/api/events");
      const data = await request.json();
      if (data) {
        const today = new Date();
        const events = Object.values(data).filter(
          (event) => new Date(event.date) >= today
        );
        setEventsData(events);
      }
    };
    getEvents();
  }, []);

  let [facebookLists, setFacebookLists] = useState([[], [], []]);
  let [numOfPost, setNumOfPost] = useState(6);

  useEffect(() => {
    async function loadFaceBookData() {
      const res = await fetch("/api/facebook");

      if (res.ok) {
        let Post = await res.json();
        Post = Post.reverse().slice(0, numOfPost);
        const tempList = [[], [], []];

        for (let i = 0; i < Post.length; i++) {
          const place = i % 3;
          tempList[place].push(Post[i]);
        }

        setFacebookLists(tempList);
      }
    }
    loadFaceBookData();
  }, [numOfPost]);

  useEffect(() => {
    if (eventSwiperRef.current) {
      Object.assign(eventSwiperRef.current, swiperParams);
      eventSwiperRef.current.initialize();
    }
  }, [eventSwiperRef]);

  return (
    <main className="flex w-full max-w-7xl m-auto flex-col items-center justify-between pt-24 px-4">
      <div className="w-full">
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
      </div>

      <Youtube />

      <div className="pt-36 w-full">
        <div className="events-type">Current Events</div>
        <div className="w-full border-t-2 border-solid border-t-slate-400 relative">
          <swiper-container ref={eventSwiperRef}>
            {eventsData && eventsData.length
              ? eventsData.map((event, index) => (
                  <Event event={event} key={index} />
                ))
              : null}
          </swiper-container>
        </div>
      </div>

      <div id="FeaturedProjects" className="pt-36">
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
          <HomeProjects />
        </div>
      </div>
      <div className="grid grid-cols-2 pt-36">
        <h3 className="text-2xl flex justify-center items-center pr-10 py-4">
          {landingPageDescriptions[2]}
        </h3>
        <img className="rounded-md" src="./team.jpeg" alt="" />
      </div>
      <TeamMembers />
      <div className="pt-36">
        <div className="text-4xl text-center mb-12">Updates From Facebook</div>
        <div className="flex flex-wrap justify-between ">
          {facebookLists.map((postList, index) => {
            return (
              <div
                key={index}
                style={{ width: "32%" }}
                className="flex flex-col"
              >
                {postList.map((post) => {
                  return <FacebookPost key={post.id} post={post} />;
                })}
              </div>
            );
          })}
        </div>
        <div
          className="bg-white m-auto text-lg text-black w-fit px-5 rounded cursor-pointer"
          onClick={() => setNumOfPost((state) => state + 3)}
        >
          ... Load more
        </div>
      </div>
    </main>
  );
}
