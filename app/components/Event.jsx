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
    <swiper-slide className="bg-red-400 w-full mb-96">
      <a
        className="w-fit m-auto"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="event">
          <div className="event-bg" style={backgroundStyle}></div>
          <div className="event-details">
            <div className="event-title">{event.name}</div>
            <div className="event-date">{formatDate(event.date)}</div>
            <div className="venue">{`${event.venue} • ${event.address}`}</div>
            <div className="cost">{`Starts at $${event.cost}`}</div>
          </div>
        </div>
      </a>
    </swiper-slide>
  );
};

export default Event;
