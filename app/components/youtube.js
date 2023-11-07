import React from 'react';
import YoutubeEmbed from '../helpers/YoutubeEmded';

const Youtube = () => {
  return (
    <div id="About" className="w-screen bg-darkTeal mt-36 p-2 md:p-5 md:py-10 lg:p-10">

      <div className="flex flex-col justify-evenly md:justify-between items-center lg:flex-row md:flex-row">
        <div className="w-full lg:w-1/2 md:w-1/3 text-white text-sm md:text-base lg:text-2xl font-bold p-4 md:p-0">
          We are in the middle of the worst European humanitarian crisis since World War II. The Blue & Yellow Foundation supports those affected by the war in Ukraine with humanitarian aid. We are volunteer-driven, 501c3 certified, and 100% of every donation is tax deductible.
        </div>
        <YoutubeEmbed
          idk="w-screen md:w-full p-4 h-[220px] md:w-[500px] md:h-[300px] lg:w-[800px] lg:h-[400px] lg:rounded-3xl"
          wrapper=""
          embedId="qpWkGYq-cmE"
        />
      </div>

    </div>
  );
};

export default Youtube;
