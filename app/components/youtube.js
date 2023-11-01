import React from "react";
import YoutubeEmbed from "../helpers/youtube";

const Youtube = () => {
  return (
    <div id="About" className="grid grid-cols-2 pt-40">
      <YoutubeEmbed
        idk="rounded-lg w-full h-full mr-11"
        embedId="qpWkGYq-cmE"
      />
      <div className="text-sky text-2xl pt-8 pr-8 pb-8 pl-11 tracking-normal leading-normal">
        <h3>
          We are in the middle of the worst European humanitarian crisis since
          World War II. The Blue & Yellow Foundation supports those affected by
          the war in Ukraine with humanitarian aid. We are volunteer-driven,
          501c3 certified, and 100% of every donation is tax deductible.
        </h3>
      </div>
    </div>
  );
};

export default Youtube;
