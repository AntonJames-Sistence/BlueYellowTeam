import React from "react";
import YoutubeEmbed from "../../helpers/youtube";
import "./index.css";

const About = () => {
  return (
    <div id="About">
      <YoutubeEmbed idk="About-Youtube" embedId="qpWkGYq-cmE" />
      <div className="About-para">
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

export default About;
