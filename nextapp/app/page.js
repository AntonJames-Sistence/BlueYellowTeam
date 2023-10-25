import { sampleData } from '../data/facebook';
import { allProjects } from '../data/projects';
import FacebookPost from './components/FacebookPost';
import MainProjectCard from './components/MainProjectCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="About">
        <div className="About-para">
          <h3>
            We are in the middle of the worst European humanitarian crisis since
            World War II. The Blue & Yellow Foundation supports those affected
            by the war in Ukraine with humanitarian aid. We are
            volunteer-driven, 501c3 certified, and 100% of every donation is tax
            deductible.
          </h3>
        </div>
      </div>
      <div>
        <div>WHO DO WE HELP?</div>
        <div>
          {allProjects.map((item, index) => (
            <MainProjectCard
              key={index}
              // img={item.img}
              title={item.title}
              para={item.para}
            />
          ))}
        </div>
      </div>
      <div>
        <h3>
          Founded by Ukrainian Americans with direct connections to the
          civilians suffering on the front lines, the Blue & Yellow Foundation
          raises funds and supplies for the people most dramatically affected.
          We work on a strictly volunteer basis, so 100% of donations reach the
          people who need them. Our work is transparent, moving resources from
          your hands to the hands of people in need. We share pictures, stories,
          and reports of the supplies and support we provide to Ukraine, so our
          donors can see their impact on a regular basis.
        </h3>
        {/* <img src={teamImg} alt="" /> */}
      </div>
      <div id="FaceBookLogs">
        <div className="FaceBookLogs-title">Updates From Facebook</div>
        <div className="FaceBookLogs-allPost">
          {sampleData.map((post, index) => {
            return <FacebookPost key={index} post={post} />;
          })}
        </div>
      </div>
    </main>
  );
}
