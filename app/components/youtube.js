import React from 'react';
import YoutubeEmbed from '../helpers/youtube';

const Youtube = () => {
  return (
    <div
      id="About"
      className="w-screen h-[80vh] p-2 md:p-5 md:py-10 lg:p-10 flex items-center justify-center pt-10"
    >
      <div className="flex flex-col justify-evenly md:justify-between items-center">
        <h1 className="w-full text-black text-3xl text-center font-bold p-4 md:p-0">
          Volunteer-driven, 501c3 certified, and 100% of every donation is tax
          deductible
        </h1>
        <YoutubeEmbed
          idk="w-screen md:w-full p-4 h-[220px] md:w-[500px] md:h-[300px] lg:w-[800px] lg:h-[400px] lg:rounded-3xl pt-10"
          wrapper=""
          embedId="qpWkGYq-cmE"
        />
      </div>
    </div>
  );
};

export default Youtube;
