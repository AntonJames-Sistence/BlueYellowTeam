import Event from "./components/Event";
import "./events.css";

const Events = async () => {
  const request = await fetch("http://localhost:3000/api/events", {
    cache: "no-store",
  });
  const data = await request.json();
  // console.log("data", data);
  const eventData = Object.values(data);

  const today = new Date();
  const upcomingEvents = eventData.filter(
    (event) => new Date(event.date) >= today
  );
  const pastEvents = eventData.filter((event) => new Date(event.date) < today);
  // console.log(upcomingEvents);
  // console.log(pastEvents);

  return (
    <>
      <div className="component-box">
        <div className="events-type">Upcoming Events</div>
        <hr className="horizontal-line"></hr>
        <div className="upcoming-events">
          {upcomingEvents.map((event, index) => (
            <Event event={event} key={index} />
          ))}
        </div>

        <div className="events-type">Past Events</div>
        <hr className="horizontal-line"></hr>
        <div className="past-events">
          {pastEvents.map((event) => (
            <Event event={event} key={event.id} />
          ))}
        </div>
        <hr className="horizontal-line"></hr>
      </div>
    </>
  );
};

export default Events;

// export default async function Page() {
//   const request = await fetch('http://localhost:3000/api/events');
//   const data = await request.json();
//   // console.log(data);
//   return <>
//   </>;
// }