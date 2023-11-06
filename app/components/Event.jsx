"use client";
import "./event.css";
import { useEffect, useState } from "react";

const Event = ({ event }) => {
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
    <swiper-slide className="">
      <div
        id="card"
        className="mx-2 bg-white shadow-[0px_6px_6px_0px_lightgrey] max-w-sm m-auto rounded-md"
      >
        <img src={event.image} className="rounded-t-md" alt="" />

        <div className="text-center p-2">
          <h2 className="text-left text-xl font-bold h-20">
            {event.name.slice(0, 45)}
            {event.name.length > 45 && "..."}
          </h2>
          <div className="text-md mt-2 text-left h-32 flex flex-col justify-between">
            <div className="text-14 leading-2 tracking-wide text-gray-700">
              {formatDate(event.date)}
            </div>
            <div className="text-14 leading-2 tracking-wide text-gray-700">{`${event.venue} • ${event.address}`}</div>
            <div className="text-14 leading-2 tracking-wide text-gray-700">{`Starts at $${event.cost}`}</div>
          </div>
        </div>
        <a href={event.url} target="_blank">
          <div className="bg-black hover:bg-blue-600 text-white text-right font-bold pr-4 py-2 transition-colors duration-200 text-14 leading-2 tracking-wide rounded-b-md">
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
