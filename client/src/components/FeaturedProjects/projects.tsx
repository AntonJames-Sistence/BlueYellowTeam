import React from "react";
import "./index.css";

type Proj = {
  img: string;
  title: string;
  para: string;
};

const Projects = ({ img, title, para }: Proj) => {
  return (
    <div className="Projects">
      <img className="Projects-img" src={img} alt="" />
      <div className="Projects-btn">Donate now</div>
      <div className="Projects-title">{title}</div>
      <div className="Projects-para">{para}</div>
    </div>
  );
};

export default Projects;
