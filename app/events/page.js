"use client";
import { useEffect, useState, useRef } from "react";
import Event from "./components/Event";
import { register } from "swiper/element/bundle";
import swiperParams from "../../data/swiperParams";
// import "./events.css";

const Events = () => {
  register();
  const pastSwiperRef = useRef(null);
  const upcommingSwiperRef = useRef(null);
  const [realEventData, setRealEventData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const request = await fetch("http://localhost:3000/api/events", {
        cache: "no-store",
      });
      const data = await request.json();
      if (data) {
        const eventData = Object.values(data);
        setRealEventData(eventData);
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
  );

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
        <div className="w-full max-w-7xl m-auto pt-36 pb-5">
          <div className="events-type">Upcoming Events</div>
          <div className="w-full border-t-2 border-solid border-t-slate-400 relative">
            <div
              className="absolute -left-5 top-1/2 cursor-pointer"
              onClick={() => upcommingSwiperRef.current.swiper.slidePrev()}
            >
              <i className="fa-solid fa-angle-left text-3xl"></i>
            </div>
            <div
              className="absolute -right-5 top-1/2 cursor-pointer"
              onClick={() => upcommingSwiperRef.current.swiper.slideNext()}
            >
              <i className="fa-solid fa-angle-right text-3xl"></i>
            </div>
            <swiper-container ref={upcommingSwiperRef} init={"false"}>
              {upcomingEvents.map((event, index) => (
                <Event event={event} key={index} />
              ))}
            </swiper-container>
          </div>

          <div className="events-type">Past Events</div>
          <div className="w-full border-t-2 border-solid border-t-slate-400 relative">
            <div
              className="absolute -left-5 top-1/2 cursor-pointer"
              onClick={() => pastSwiperRef.current.swiper.slidePrev()}
            >
              <i className="fa-solid fa-angle-left text-3xl"></i>
            </div>
            <div
              className="absolute -right-5 top-1/2 cursor-pointer"
              onClick={() => pastSwiperRef.current.swiper.slideNext()}
            >
              <i className="fa-solid fa-angle-right text-3xl"></i>
            </div>
            <swiper-container ref={pastSwiperRef} init={"false"}>
              {pastEvents.map((event, index) => (
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
};

export default Events;

// export default async function Page() {
//   const request = await fetch('http://localhost:3000/api/events');
//   const data = await request.json();
//   // console.log(data);
//   return <>
//   </>;
// }

{
  /* <div className="events-type">Upcoming Events</div>
          <hr className="horizontal-line"></hr>
          <div className="upcoming-events">
            {upcomingEvents.map((event, index) => (
              <Event event={event} key={index} />
            ))}
          </div>

          <div className="events-type">Past Events</div>
          <hr className="horizontal-line"></hr>
          <div className="past-events">
            {pastEvents.map((event) => (
              <Event event={event} key={event.id} />
            ))}
          </div>
          <hr className="horizontal-line"></hr> */
}
