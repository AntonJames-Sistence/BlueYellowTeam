"use client";
import React from "react";
import { useRef, useEffect } from "react";
import TeamCard from "./TeamCard";

export default function TeamMembers() {
  const swiperRef = useRef();
  const data = [1, 2, 3, 4, 5];
  const swiperParams = {
    slidesPerView: 4,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      550: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1240: {
        slidesPerView: 4,
      },
    },
    on: {
      init() {
        // ...
      },
    },
  };

  useEffect(() => {
    Object.assign(swiperRef.current, swiperParams);
    swiperRef.current.initialize();
  }, []);

  return (
    <div className="w-full pt-36">
      <div className="flex justify-between pb-10">
        <div className="text-white font-bold ">Team</div>
        <div className="flex gap-5">
          <div
            className="cursor-pointer "
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
      <swiper-container ref={swiperRef} init={false}>
        {data.map((item, index) => {
          return <TeamCard key={index} index={index} />;
        })}
      </swiper-container>
    </div>
  );
}
