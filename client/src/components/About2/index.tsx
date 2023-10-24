import React from "react";
// @ts-ignore
import teamImg from "./blueyellowfoundation-team-img-2.jpeg";
import "./index.css";

const About2 = () => {
  return (
    <div id="About2">
      <h3 className="About2-text">
        Founded by Ukrainian Americans with direct connections to the civilians
        suffering on the front lines, the Blue & Yellow Foundation raises funds
        and supplies for the people most dramatically affected. We work on a
        strictly volunteer basis, so 100% of donations reach the people who need
        them. Our work is transparent, moving resources from your hands to the
        hands of people in need. We share pictures, stories, and reports of the
        supplies and support we provide to Ukraine, so our donors can see their
        impact on a regular basis.
      </h3>
      <img className="About2-img" src={teamImg} alt="" />
    </div>
  );
};

export default About2;
