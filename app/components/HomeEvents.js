"use client";
import { useEffect, useState, useRef } from "react";
import Event from "./Event";
import { register } from "swiper/element/bundle";
import swiperParams from "../../data/swiperParams";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function HomeEvents() {
  register();
  const pastSwiperRef = useRef(null);
  const [realEventData, setRealEventData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const request = await fetch("/api/events");
      const data = await request.json();
      if (data) {
        const eventData = Object.values(data);
        setRealEventData(eventData);
      }
    };
    getData();
  }, []);

  const today = new Date();

  const upcommingEvents = realEventData
    ?.filter((event) => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  useEffect(() => {
    // const swiper = new Swiper(upcommingSwiperRef.current, swiperParams);
    if (pastSwiperRef.current) {
      Object.assign(pastSwiperRef.current, swiperParams);
      pastSwiperRef.current.initialize();
    }
  }, [upcommingEvents]);

  if (realEventData && (!upcommingEvents || !upcommingEvents.length)) {
    return (
      <div className="w-full max-w-[1400px] m-auto pb-5 text-xl h-80 flex justify-center items-center">
        No upcoming events.
      </div>
    );
  }

  return (
    <>
      {realEventData ? (
        <div className="w-full max-w-[1400px] m-auto pb-5">
          <div className="w-full relative">
            <div className="flex gap-3 absolute right-0 -top-12">
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
              {upcommingEvents.map((event, index) => (
                <Event event={event} key={index} />
              ))}
            </swiper-container>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh]">
          <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="absolute font-semibold">Loading</div>
        </div>
      )}
    </>
  );
}
