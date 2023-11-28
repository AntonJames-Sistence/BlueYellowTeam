"use client";
import { useEffect, useState, useRef } from "react";
import Event from "./Event";
import { register } from "swiper/element/bundle";
import swiperParams from "../../data/swiperParams";

export default function HomeEvents() {
  register();
  const pastSwiperRef = useRef(null);
  const [realEventData, setRealEventData] = useState(null);

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

  const today = new Date();

  const upcommingEvents = realEventData
    ?.filter((event) => new Date(event.date) >= today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  useEffect(() => {
    // const swiper = new Swiper(upcommingSwiperRef.current, swiperParams);
    if (pastSwiperRef.current) {
      Object.assign(pastSwiperRef.current, swiperParams);
      pastSwiperRef.current.initialize();
    }
  }, [realEventData]);

  if (!upcommingEvents || !upcommingEvents.length) {
    return (
      <div className="w-full max-w-[1400px] m-auto pb-5 text-2xl text-center h-80">
        No Upcomming events
      </div>
    );
  }

  return (
    <>
      {realEventData ? (
        <div className="w-full max-w-[1400px] m-auto pb-5">
          <div className="w-full relative">
            <div className="flex gap-3 absolute right-0 -top-12">
              <div
                className="cursor-pointer rounded-full w-10 h-10 flex justify-center items-center border-2 border-gray-600"
                onClick={() => pastSwiperRef.current.swiper.slidePrev()}
              >
                <i className="fa-solid fa-angle-left text-2xl"></i>
              </div>
              <div
                className="cursor-pointer rounded-full w-10 h-10 flex justify-center items-center border-2 border-gray-600"
                onClick={() => pastSwiperRef.current.swiper.slideNext()}
              >
                <i className="fa-solid fa-angle-right text-2xl"></i>
              </div>
            </div>
            <swiper-container ref={pastSwiperRef} init={"false"}>
              {upcommingEvents.map((event, index) => (
                <Event event={event} key={index} />
              ))}
            </swiper-container>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
