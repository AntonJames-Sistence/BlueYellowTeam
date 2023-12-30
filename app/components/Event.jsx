import "./main.css";

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
        <div>
          <img src={event.image} className="rounded-t-lg" alt={`${event.name} image`} />
        </div>

        <div className="text-center p-2">
          <h2 className="text-left text-xl font-bold h-20">
            {event.name.slice(0, 45)}
            {event.name.length > 45 && "..."}
          </h2>
          <hr/>
          {pastEvent ? (
            <div className="mt-2 h-32 font-bold text-left text-lg">
              This event is over
            </div>
          ) : (
            <div className="text-md mt-2 text-left h-32 flex flex-col justify-between">
              <div className="text-14 leading-2 tracking-wide text-gray-700">
                {formatDate(event.date)}
              </div>
              <div className="text-14 leading-2 tracking-wide text-gray-700">{`${event.venue} • ${event.address}`}</div>
              <div className="text-14 leading-2 tracking-wide text-gray-700">{`Starts at $${event.cost}`}</div>
            </div>
          )}
        </div>
        <a href={event.url} target="_blank">
          <div className="bg-black hover:bg-blue-600 text-white text-right font-bold pr-4 py-2 transition-colors ease-in-out duration-300 text-14 leading-2 tracking-wide rounded-b-lg">
            LEARN MORE
          </div>
        </a>
      </div>
    </swiper-slide>
  );
};

export default Event;
