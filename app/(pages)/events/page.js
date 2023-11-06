import PastUpcomingEvents from "../../components/PastUpcomingEvents";

export default function EventsPage() {
  return (
    <div className="flex flex-col items-center justify-start">
      <PageHeader title={"Our Events"} />
      <div className=" min-h-[100vh] w-full">
        <HomeEvents />
      </div>
    </div>
  );
}
