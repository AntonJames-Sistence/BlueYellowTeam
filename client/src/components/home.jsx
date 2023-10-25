import { Link } from "react-router-dom";
import FeaturedProjects from "./FeaturedProjects";
import About from "./About";
import About2 from "./About2";
import FacebookLogs from "./FacebookLogs";
<<<<<<< HEAD
import Events from "./Events/Events";
import IntroBanner from "./IntroBanner/IntroBanner";

export default function HomePage() {
  return (
    <div id="Home" className="text-black pt-20">
      <IntroBanner />
      <About />
      <Events />
=======

export default function HomePage() {
  return (
    <div className="text-black pt-20">
      <About />
>>>>>>> main
      <FeaturedProjects />
      <About2 />
      <FacebookLogs />
    </div>
  );
}
