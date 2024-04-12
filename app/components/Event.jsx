import "./main.css";

const Event = ({ event, pastEvent }) => {

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
};

const adjustImageStyle = (imageUrl) => {
  const img = new Image();
  img.src = imageUrl;
  const width = img.naturalWidth;
  const height = img.naturalHeight;

  const aspectRatio = height / width;

  if (aspectRatio < 1) {
    return 'object-fit';
  } else {
    return 'object-contain';
  }

}
  
return (
  pastEvent ? ( // In case event is over display card with opacity and dimmed text
    <swiper-slide>
      <div
        id="card"
        className="bg-white max-w-sm m-auto rounded-lg relative border shadow-md mr-2"
      >
        <div className="flex justify-center">
          <img
            className={`w-11/12 h-48 lg:h-44 mt-2 justify-self-center opacity-60 rounded-lg ${adjustImageStyle(event.image)}`}
            src={event.image}
            alt={`${event.name} image`}
          />
        </div>

        <div className="text-center my-4 mx-4">
          <h2 className="text-left text-xl font-bold h-20 text-gray-400">
            {event.name.slice(0, 45)}
            {event.name.length > 45 && "..."}
          </h2>
          
          <div className="text-md mt-2 text-left h-32 flex flex-col justify-evenly text-gray-300 text-14 leading-2 tracking-wide">
            <div className="font-semibold">
              {formatDate(event.date)}
            </div>
            <div>{`${event.venue} • ${event.address}`}</div>
            <div>
              Starts at <p className="font-extrabold inline">{`$${event.cost}`}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-gray-500 text-white text-right font-bold pr-4 py-2 text-14 leading-2 tracking-wide rounded-lg w-11/12 mb-2 uppercase">
            This Event is over
          </div>
        </div>
      </div>
    </swiper-slide>
  ):( // Else display this card with details and link to event
    <swiper-slide>
      <div
        id="card"
        className="bg-white max-w-sm m-auto rounded-lg relative border shadow-md mr-2"
      >
        <div className="flex justify-center">
          <img
            className={`w-11/12 h-48 lg:h-44 mt-2 justify-self-center rounded-lg ${adjustImageStyle(event.image)}`}
            src={event.image}
            alt={`${event.name} image`}
          />
        </div>

        <div className="text-center my-4 mx-4">
          <h2 className="text-left text-xl font-bold h-20">
            {event.name.slice(0, 45)}
            {event.name.length > 45 && "..."}
          </h2>
          
          <div className="text-md mt-2 text-left h-32 flex flex-col justify-evenly text-gray-700 text-14 leading-2 tracking-wide">
            <div className="font-semibold">
              {formatDate(event.date)}
            </div>
            <div>{`${event.venue} • ${event.address}`}</div>
            <div>
              Starts at <p className="font-extrabold inline">{`$${event.cost}`}</p>
            </div>
          </div>
        </div>

        <a href={event.url} target="_blank" className="flex justify-center">
          <div className="bg-blue-500 hover:bg-yellow-500 hover:scale-[105%] text-white text-right font-bold pr-4 py-2 transition-all ease-in-out duration-300 text-14 leading-2 tracking-wide rounded-lg w-11/12 mb-2 uppercase">
            LEARN MORE
          </div>
        </a>
    </div>
  </swiper-slide>
))
};

export default Event;
