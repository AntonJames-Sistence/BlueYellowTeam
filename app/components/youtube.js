import React from 'react';
import YoutubeEmbed from '../helpers/youtube';

const Youtube = () => {
  return (
    <div
      id="About"
      className=" w-full flex flex-col md:flex-row bg-darkTeal items-center justify-center min-h-[500px]"
    >
      <div className="h-full w-full md:w-1/2 text-white flex items-center justify-center text-3xl font-bold">
        <h3 className="p-6">
          We are volunteer-driven, 501c3 certified, and 100% of every donation
          is tax deductible.
        </h3>
      </div>
      <YoutubeEmbed
        idk="w-full h-full md:min-h-[400px] md:min-w-[400px] lg:h-full lg:mr-11 rounded-2xl"
        wrapper="lg:mr-11"
        embedId="qpWkGYq-cmE"
      />
    </div>
  );
};

export default Youtube;
