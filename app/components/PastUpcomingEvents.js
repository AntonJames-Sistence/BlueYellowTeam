"use client";
import { useEffect, useState, useRef } from "react";
import Event from "./Event";
import "./main.css";
import { register } from "swiper/element/bundle";
import swiperParams from "../../data/swiperParams";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const PastUpcomingEvents = () => {
  register();
  const pastSwiperRef = useRef(null);
  const upcommingSwiperRef = useRef(null);
  const [realEventData, setRealEventData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const request = await fetch("/api/events", { next: { revalidate: 60 } });
      const data = await request.json();
      if (data) {
        const eventData = Object.values(data);
        setRealEventData(eventData.sort((a, b) => b.date - a.data));
      }
    };
    getData();
  }, []);

  const today = new Date();
  const upcomingEvents = realEventData?.filter(
    (event) => new Date(event.date) >= today
  );
  const pastEvents = realEventData?.filter(
    (event) => new Date(event.date) < today
  ).reverse(); // reverse order so user can see most recent past events first

  useEffect(() => {
    // const swiper = new Swiper(upcommingSwiperRef.current, swiperParams);
    if (upcommingSwiperRef.current) {
      Object.assign(upcommingSwiperRef.current, swiperParams);
      upcommingSwiperRef.current.initialize();

      Object.assign(pastSwiperRef.current, swiperParams);
      pastSwiperRef.current.initialize();
    }
  }, [realEventData]);

  return (
    <>
      {realEventData ? (
        <div className="w-full max-w-[1400px] m-auto pt-8">
          <div className="text-3xl font-bold mb-4 text-gray-700 text-center md:text-left">Upcoming</div>
          <div className="w-full relative">
            <div className="flex gap-3 absolute right-2 md:right-0 -top-12">
              <button
                className="text-gray-300 text-2xl hover:text-blue-500 ease-in-out duration-300"
                onClick={() => upcommingSwiperRef.current.swiper.slidePrev()}
              >
                <FaArrowAltCircleLeft className="text-4xl" />
              </button>
              <button
                className="text-gray-300 text-2xl hover:text-blue-500 ease-in-out duration-300"
                onClick={() => upcommingSwiperRef.current.swiper.slideNext()}
              >
                <FaArrowAltCircleRight className="text-4xl" />
              </button>
            </div>
            <swiper-container ref={upcommingSwiperRef} init={"false"}>
              {upcomingEvents.map((event, index) => (
                <Event event={event} key={index} />
              ))}
            </swiper-container>
          </div>

          <div className="text-3xl font-bold my-4 text-gray-700 text-center md:text-left">Past</div>
          <div className="w-full  relative">
            <div className="flex gap-3 absolute right-2 md:right-0 -top-12">
              <button
                className="text-gray-300 text-2xl hover:text-blue-500 ease-in-out duration-300"
                onClick={() => pastSwiperRef.current.swiper.slidePrev()}
              >
                <FaArrowAltCircleLeft className="text-4xl" />
              </button>
              <button
                className="text-gray-300 text-2xl hover:text-blue-500 ease-in-out duration-300"
                onClick={() => pastSwiperRef.current.swiper.slideNext()}
              >
                <FaArrowAltCircleRight className="text-4xl" />
              </button>
            </div>
            <swiper-container ref={pastSwiperRef} init={"false"}>
              {pastEvents.map((event, index) => (
                <Event event={event} key={index} />
              ))}
            </swiper-container>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[100vh]">
          <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="absolute">Loading</div>
        </div>
      )}
    </>
  );
};

export default PastUpcomingEvents;
