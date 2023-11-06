import { allProjects } from '../../../data/projects';
import ImageTextContainer from '../../components/ImageTextContainer';
import PageHeader from '../components/PageHeader';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-start">
      <PageHeader title={'Our Projects'} />
      <div className="flex flex-wrap gap-5 md:flex-row flex-col max-w-7xl pt-24 w-full">
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
  );
}
