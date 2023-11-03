import HomeEvents from '../components/HomeEvents';

export default function EventsPage() {
  return (
    <div className="pt-24 min-h-[100vh] flex flex-col items-center justify-start">
      <div className="text-left text-5xl font-bold text-black-500 pb-7">
        Events
      </div>
      <div className="flex flex-wrap gap-5 md:flex-row flex-col max-w-7xl">
        <HomeEvents />
      </div>
    </div>
  );
}
