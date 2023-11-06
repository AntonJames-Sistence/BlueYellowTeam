import React from 'react';
import YoutubeEmbed from '../helpers/youtube';

const Youtube = () => {
  return (
    <div
      id="About"
      className="w-screen h-screen p-10 flex flex-col items-center justify-center pt-20"
    >
      <h1 className="w-full text-black text-3xl text-center font-bold p-4 md:p-0">
        Volunteer-driven, 501c3 certified, and 100% of every donation is tax
        deductible
      </h1>

      <hr className="pt-10" />
      <div className="w-full h-full flex items-center justify-center">
        <YoutubeEmbed embedId="qpWkGYq-cmE" />
      </div>
    </div>
  );
};

export default Youtube;

// We are in the middle of the worst European humanitarian crisis since
// World War II. The Blue & Yellow Foundation supports those affected by
// the war in Ukraine with humanitarian aid. We are volunteer-driven,
// 501c3 certified, and 100% of every donation is tax deductible.
