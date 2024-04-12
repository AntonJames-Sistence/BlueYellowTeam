"use client";
import { useEffect, useState, useRef } from "react";
import Event from "./Event";
import "./main.css";
import { register } from "swiper/element/bundle";
import swiperParams from "../../data/swiperParams";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const PastUpcomingEvents = () => {
  register();
  // const pastSwiperRef = useRef(null);
  // const upcommingSwiperRef = useRef(null);
  const combinedSwiperRef = useRef(null);
  const [realEventData, setRealEventData] = useState(null);
  const [allEvents, setAllEvents] = useState([]);
  const today = new Date();

  useEffect(() => {
    const getData = async () => {
      const request = await fetch("/api/events", { next: { revalidate: 60 } });
      const data = await request.json();
      if (data) {
        const eventData = Object.values(data);
        setRealEventData(eventData);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (realEventData) {
      setAllEvents(getSortedEvents(realEventData));
    }
  }, [realEventData]);

  function getSortedEvents(data) {

    let upcomingEvents = data.filter(
      (event) => new Date(event.date) >= today
    ).sort((a, b) => new Date(a.date) - new Date(b.date));

    let pastEvents = data.filter(
      (event) => new Date(event.date) < today
    ).sort((a, b) => new Date(b.date) - new Date(a.date));

    let combined = null;

    if (upcomingEvents && pastEvents){
      combined = upcomingEvents.concat(pastEvents);
    } else if (upcomingEvents && !pastEvents){
      combined = upcomingEvents;
    } else if (!upcomingEvents && pastEvents){
      combined = pastEvents;
    } else {
      combined = [];
    }

    return combined;
  };

  useEffect(() => {
    // const swiper = new Swiper(upcommingSwiperRef.current, swiperParams);
    if (combinedSwiperRef.current) {
      // Object.assign(upcommingSwiperRef.current, swiperParams);
      // upcommingSwiperRef.current.initialize();

      // Object.assign(pastSwiperRef.current, swiperParams);
      // pastSwiperRef.current.initialize();

      Object.assign(combinedSwiperRef.current, swiperParams);
      combinedSwiperRef.current.initialize();
    }
  }, [allEvents]);

  return (
    <>
      {allEvents.length ? (
        <div className="w-full max-w-[1400px] m-auto pt-8">
          <div className="text-4xl font-bold mb-4 w-3/5 text-black-500 text-center md:text-left">Upcoming and Past Events</div>
          <div className="w-full relative">
            <div className="flex gap-3 absolute right-2 md:right-0 -top-20 lg:-top-14">
              <button
                className="text-gray-300 hover:text-blue-500 ease-in-out duration-300"
                onClick={() => combinedSwiperRef.current.swiper.slidePrev()}
              >
                <FaArrowAltCircleLeft className="text-5xl" />
              </button>
              <button
                className="text-gray-300 hover:text-blue-500 ease-in-out duration-300"
                onClick={() => combinedSwiperRef.current.swiper.slideNext()}
              >
                <FaArrowAltCircleRight className="text-5xl" />
              </button>
            </div>
            <swiper-container ref={combinedSwiperRef} init={"false"}>
              {allEvents?.map((event, index) => (
                <Event event={event} pastEvent={new Date(event.date) < today} key={index} />
              ))}
            </swiper-container>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[100vh]">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </>
  );
};

export default PastUpcomingEvents;
