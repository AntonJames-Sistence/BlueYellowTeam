'use client';
import { whoWeHelp } from '../data/whowehelp';
import { useEffect, useState } from 'react';
import WhoWeHelp from './components/WhoWeHelp';
import Youtube from './components/youtube';
import HomeProjects from './components/HomeProjects';
import FacebookPost from './components/FacebookPost';
import HomeEvents from './components/HomeEvents';

export default function Home() {
  let [facebookLists, setFacebookLists] = useState([[], [], []]);
  let [numOfPost, setNumOfPost] = useState(6);

  useEffect(() => {
    async function loadFaceBookData() {
      const res = await fetch('/api/facebook');

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

  return (
    <main className="flex w-full flex-col items-center justify-between pt-24 ">
      <div className="relative w-[100vw] overflow-hidden" style={{}}>
        <div className="relative">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-negative"
            src="/flag_bg.mp4"
            autoPlay
            loop
            muted
            controls={false}
          ></video>

          <div className="flex w-full h-96 min-h-[500px]">
            <div className="flex flex-col justify-center p-5 w-1/2 z-10">
              <div className="text-4xl text-yellow-400 font-bold leading-snug text-shadow-lg mb-4">
                STAND WITH LOVE STAND WITH UKRAINE
              </div>
              <div className="text-blue-600 font-bold text-lg leading-tight text-shadow-sm mb-20">
                100% OF PROFIT GOES TO SUPPORT UKRAINIANS IN NEED
              </div>
            </div>
            <div
              className="w-1/2 h-full bg-cover bg-no-repeat z-10"
              style={{ backgroundImage: `url(./intro_banner.png)` }}
            ></div>
          </div>
        </div>
      </div>

      <Youtube />

      <div id="who-we-help" className="pt-36 max-w-7xl">
        <div
          id="who-help-title"
          className="text-left text-5xl font-bold text-black-500 pb-3"
        >
          Who do we help?
        </div>
        <div className="w-1/2 text-xl">
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
        <div className="text-left text-5xl font-bold text-black-500 pb-3">
          Events
        </div>
        <div className="w-1/2 text-xl">
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

      <div className="pt-36 max-w-7xl">
        <div className="text-left text-5xl font-bold text-black-500 pb-3 mb-4">
          Updates From Facebook
        </div>
        <div className="flex flex-wrap justify-between ">
          {facebookLists?.map((postList, index) => {
            return (
              <div
                key={index}
                style={{ width: '32%' }}
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
