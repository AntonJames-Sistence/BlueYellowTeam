import React from "react";
import YoutubeEmbed from "../helpers/YoutubeEmded";

const Youtube = () => {
  return (
    <div
      id="About"
      className="w-screen bg-darkTeal mt-36 p-8 sm:py-10 md:p-5 lg:p-10"
    >
      <div className="flex flex-col-reverse md:flex-row justify-evenly md:justify-between items-center max-w-[1400px] m-auto ">
        <div className="w-full md:w-1/2 text-white text-lg lg:text-xl xl:text-2xl font-bold py-10 sm:p-10 md:pr-8 lg:pr-20 xl:pr-32 md:pl-10">
          We are in the middle of the worst European humanitarian crisis since
          World War II. The Blue & Yellow Foundation supports those affected by
          the war in Ukraine with humanitarian aid. We are volunteer-driven,
          501c3 certified, and 100% of every donation is tax deductible.
        </div>
        <YoutubeEmbed
          idk="w-full lg:w-11/12 h-[300px] rounded-[2rem] "
          wrapper="rounded-3xl"
          embedId="qpWkGYq-cmE"
        />
      </div>
    </div>
  );
};

export default Youtube;
