import React from 'react';
import YoutubeEmbed from '../helpers/youtube';

const Youtube = () => {
  return (
    <div
      id="About"
      className=" w-full flex flex-col mt-28 lg:grid lg:grid-cols-2 lg:grid-rows-1 bg-darkTeal p-16"
    >
      <div className="text-white text-2xl lg:pr-8 pb-14 lg:pl-11 tracking-normal leading-normal py-6 lg:p-14">
        <h3>
          We are in the middle of the worst European humanitarian crisis since
          World War II. The Blue & Yellow Foundation supports those affected by
          the war in Ukraine with humanitarian aid. We are volunteer-driven,
          501c3 certified, and 100% of every donation is tax deductible.
        </h3>
      </div>
      <YoutubeEmbed
        idk="w-full h-100 lg:h-full lg:mr-11 rounded-2xl"
        wrapper="lg:mr-11"
        embedId="qpWkGYq-cmE"
      />
    </div>
  );
};

export default Youtube;
