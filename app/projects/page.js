import HomeProjects from '../components/HomeProjects';

export default function ProjectsPage() {
  return (
    <div className="pt-24 min-h-[100vh] flex flex-col items-center justify-evenly">
      <div className="text-left text-5xl font-bold text-black-500 pb-7">
        Projects
      </div>
      <div className="flex flex-wrap gap-5 md:flex-row flex-col max-w-7xl">
        <HomeProjects />
      </div>
    </div>
  );
}
