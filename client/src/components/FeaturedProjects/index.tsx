import React from "react";
import Projects from "./projects";
import "./index.css";
// @ts-ignore
import ChildrenImg from "./assets/causes-children.jpeg";
// @ts-ignore
import DisplacedImg from "./assets/causes-displaced.jpeg";
// @ts-ignore
import MedicalImg from "./assets/causes-medical-2.jpeg";

const allProjects = [
  {
    img: ChildrenImg,
    title: "Children",
    para: "We support the education, wellness, and development of children in crisis. From clothes to learning materials, we work directly with families, refugee centers, and NGOs to get kids what they need.",
  },
  {
    img: MedicalImg,
    title: "Medical Workers",
    para: "We collaborate with hospitals and medical professionals in the United States to collect and ship critical medical supplies to the front lines, where they save lives.",
  },
  {
    img: DisplacedImg,
    title: "Displaced People",
    para: "We identify people who lost their homes to the war and help them get back on their feet. We provide temporary shelter, food, and cover medical expenses for refugees and displaced people.",
  },
];

const FeaturedProjects = () => {
  return (
    <div id="FeaturedProjects" className="FeaturedProjects">
      <div className="FeaturedProjects-title">WHO DO WE HELP?</div>
      <div className="FeaturedProjects-projects">
        {allProjects.map((item, index) => (
          <Projects
            key={index}
            img={item.img}
            title={item.title}
            para={item.para}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
