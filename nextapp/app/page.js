import { sampleData } from '../data/facebook';
import { landingPageDescriptions } from '../data/homePage';
import { allProjects } from '../data/projects';
import FacebookPost from './components/FacebookPost';
import MainProjectCard from './components/MainProjectCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="relative w-full overflow-hidden rounded-xl">
          <div className="relative">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-negative"
              src="./src/components/IntroBanner/flag_bg.mp4"
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
                <div className="text-blue-600 font-bold text-lg leading-tight text-shadow-sm">
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
      <div>
        <div>WHO DO WE HELP?</div>
        <div>
          {allProjects.map((item, index) => (
            <MainProjectCard
              key={index}
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
