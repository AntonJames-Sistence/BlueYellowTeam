'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { sampleData } from '../data/facebook';
import { allProjects, landingPageDescriptions } from '../data/projects';
import Login from './components/LoginButton';
import FacebookPost from './components/FacebookPost';
import MainProjectCard from './components/MainProjectCard';
import Event from './events/components/Event';

export default function Home() {

  const [projectsData, setProjectsData] = useState(null);
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const request = await fetch('http://localhost:3000/api/projects', {
        cache: 'no-store',
      });
      const data = await request.json();
      if (data) {
        setProjectsData(Object.values(data));
      }
    }

    const getEvents = async () => {
      const request = await fetch('http://localhost:3000/api/events', {
        cache: 'no-store',
      });
      const data = await request.json();
      if (data) {
        const today = new Date();
        const events = Object.values(data).filter(
          (event) => new Date(event.date) >= today
        );
        setEventsData(events);
      }
    }
    getProjects();
    getEvents();
  }, [])


  if ( !eventsData) return <h1>Loading...</h1>


  let splitFacebookPost = [[], [], []];

  for (let i = 0; i < sampleData.length; i++) {
    const place = i % 3;
    splitFacebookPost[place].push(sampleData[i]);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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

      <div className="component-box">
        <div className="events-type">Current Events</div>
        <hr className="horizontal-line"></hr>
        <div className="upcoming-events">
          {eventsData.map((event, index) => (
            <Event event={event} key={index} />
          ))}
        </div>
        <hr className="horizontal-line"></hr>
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
          {projectsData.map((item, index) => (
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
        <div className="flex flex-wrap justify-between ">
          {splitFacebookPost.map((postList, index) => {
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
      </div>
    </main>
  );
}
