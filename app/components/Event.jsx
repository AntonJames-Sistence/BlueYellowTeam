import "./main.css";
import Image from "next/image";

const Event = ({ event, pastEvent }) => {
  const { id, url } = event;
  // Extract the background image URL

  const backgroundStyle = {
    backgroundImage: `url("${event.image}")`,
  };

  function formatDate(inputDate) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date(inputDate);
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    const formattedDate = `${dayOfWeek}, ${month} ${day}, ${
      hours % 12
    }:${minutes.toString().padStart(2, "0")} ${ampm}`;

    return formattedDate;
  }

  return (
    <swiper-slide>
      <div
        id="card"
        className="bg-white max-w-sm m-auto rounded-lg relative border shadow-md mr-2"
      >
        {/* {pastEvent && (
          <div className="absolute w-full h-[91.5%] bg-black opacity-60 rounded-t-lg"></div>
        )} */}
        <div className="flex justify-center">
          <Image
            className="rounded-lg w-11/12 mt-2 justify-self-center"
            width={600}
            height={100}
            src={event.image}
            alt={`${event.name} image`}
          />
        </div>

        <div className="text-center my-4 mx-4">
          <h2 className="text-left text-xl font-bold h-20">
            {event.name.slice(0, 45)}
            {event.name.length > 45 && "..."}
          </h2>
          {pastEvent ? (
            <div className="mt-2 h-32 font-bold text-left text-lg">
              This event is over
            </div>
          ) : (
            <div className="text-md mt-2 text-left h-32 flex flex-col justify-evenly">
              <div className="text-14 leading-2 tracking-wide text-gray-700">
                {formatDate(event.date)}
              </div>
              <div className="text-14 leading-2 tracking-wide text-gray-700">{`${event.venue} • ${event.address}`}</div>
              <div className="text-14 leading-2 tracking-wide text-gray-700">
                Starts at <p className="font-bold inline">{`$${event.cost}`}</p>
              </div>
            </div>
          )}
        </div>
        <a href={event.url} target="_blank" className="flex justify-center">
          <div className="bg-black hover:bg-blue-600 text-white text-right font-bold pr-4 py-2 transition-colors ease-in-out duration-300 text-14 leading-2 tracking-wide rounded-lg w-11/12 mb-2">
            LEARN MORE
          </div>
        </a>
      </div>
    </swiper-slide>
  );
};

export default Event;
