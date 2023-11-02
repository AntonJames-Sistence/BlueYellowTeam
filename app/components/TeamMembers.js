'use client';
import React from 'react';
import { useRef, useEffect } from 'react';
import TeamCard from './TeamCard';
import { register } from 'swiper/element/bundle';
import swiperParams from '../../data/swiperParams';
register();

export default function TeamMembers() {
  const swiperRef = useRef(null);
  const data = [1, 2, 3, 4, 5];

  useEffect(() => {
    if (swiperRef.current) {
      Object.assign(swiperRef.current, swiperParams);
      swiperRef.current.initialize();
    }
  }, [swiperRef]);

  return (
    <div className="w-full pt-36">
      <div className="flex justify-between pb-10">
        <div className="text-left text-5xl font-bold text-black-500">Team</div>
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
      <swiper-container ref={swiperRef}>
        {data.map((item, index) => {
          return <TeamCard key={index} index={index} />;
        })}
      </swiper-container>
    </div>
  );
}
