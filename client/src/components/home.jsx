import { Link } from "react-router-dom";
import FeaturedProjects from "./FeaturedProjects";
import About from "./About";
import About2 from "./About2";
import FacebookLogs from "./FacebookLogs";
import Events from "./Events/Events";

export default function HomePage() {
  return (
    <div id="Home" className="text-black pt-20">
      <About />
      <Events />
      <FeaturedProjects />
      <About2 />
      <FacebookLogs />
    </div>
  );
}
