import MainProjectCard from './MainProjectCard';
import { allProjects } from '../../data/projects';

export default function HomeProjects() {
  return (
    <>
      {allProjects.map((item, index) => {
        return (
          <MainProjectCard
            key={index}
            slug={item.slug}
            img={item.img}
            title={item.title}
            date={item.date}
          />
        );
      })}
    </>
  );
}
