import HomeProjects from '../../components/HomeProjects';
import PageHeader from '../components/PageHeader';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <PageHeader title={'Our Projects'} />
      <div className="flex flex-wrap gap-5 md:flex-row flex-col max-w-7xl pt-24">
        <HomeProjects />
      </div>
    </div>
  );
}