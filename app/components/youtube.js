import React from 'react';
import YoutubeEmbed from '../helpers/youtube';

const Youtube = () => {
  return (
    <div id="About"
          className="w-screen bg-darkTeal min-h-[400px] mt-36 p-10">

      <div className="flex flex-row justify-evenly items-center">
        <div className="md:w-1/3 text-white text-2xl font-bold">
          We are in the middle of the worst European humanitarian crisis 
          since World War II. The Blue & Yellow Foundation supports those 
          affected by the war in Ukraine with humanitarian aid. We are 
          volunteer-driven, 501c3 certified, and 100% of every donation is tax deductible.
        </div>
        <YoutubeEmbed
          idk="w-full h-full lg:min-h-[400px] md:min-w-[400px] lg:w-[700px] rounded-2xl"
          wrapper=""
          embedId="qpWkGYq-cmE"
        />
      </div>

    </div>
  );
};

export default Youtube;
