'use client';
import './event.css';
import { useEffect, useState } from 'react';

const Event = ({ event }) => {
  const { id, url } = event;
  // Extract the background image URL

  const backgroundStyle = {
    backgroundImage: `url("${event.image}")`,
  };

  function formatDate(inputDate) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const date = new Date(inputDate);
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedDate = `${dayOfWeek}, ${month} ${day}, ${
      hours % 12
    }:${minutes.toString().padStart(2, '0')} ${ampm}`;

    return formattedDate;
  }

  return (
    <swiper-slide className="">
      <div
        id="card"
        className="mx-2 bg-white shadow-[0px_6px_6px_0px_lightgrey] max-w-sm m-auto"
      >
        <img src={event.image} alt="" />

        <div className="text-center p-2">
          <h2 className="text-left text-xl font-bold h-20">
            {event.name.slice(0, 50)}
            {event.name.length > 50 && '...'}
          </h2>
          <div className="text-md mt-2 text-left h-32 flex flex-col justify-between text-gray-500">
            <div className="">{formatDate(event.date)}</div>
            <div className="">{`${event.venue} • ${event.address}`}</div>
            <div className="">{`Starts at $${event.cost}`}</div>
          </div>
        </div>
        <a href={event.url} target="_blank">
          <div className="bg-sky-500 text-white text-right font-bold pr-4 py-2">
            LEARN MORE
          </div>
        </a>
      </div>
    </swiper-slide>
  );
};

export default Event;

{
  /* <a
  className="h-100 m-auto"
  href={url}
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="h-100 bg-sky-700">
    <div className="event-bg" style={backgroundStyle}></div>
    <img src={event.image}></img>
    <div className="event-details">
      <div className="event-title">{event.name}</div>
      <div className="event-date">{formatDate(event.date)}</div>
      <div className="venue">{`${event.venue} • ${event.address}`}</div>
      <div className="cost">{`Starts at $${event.cost}`}</div>
    </div>
    <div className="bg-black text-white text-right">LEARN MORE</div>
  </div>
</a>; */
}
