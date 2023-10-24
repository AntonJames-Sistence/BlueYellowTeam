import { Link } from "react-router-dom";
import FeaturedProjects from "./FeaturedProjects";
import About from "./About";
import About2 from "./About2";
import FacebookLogs from "./FacebookLogs";

export default function HomePage() {
  return (
    <div className="text-black pt-20">
      <About />
      <FeaturedProjects />
      <About2 />
      <FacebookLogs />
    </div>
  );
}
