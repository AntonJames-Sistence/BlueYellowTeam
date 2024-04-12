import { FaBlog, FaFacebook, FaHandsHelping, FaHome } from "react-icons/fa";
import { CgEventbrite } from "react-icons/cg";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidDonateHeart } from "react-icons/bi";

export const navLinks = [
  { href: "/", title: "Home", icon: <FaHome /> },
  // { href: "/donate", title: "Donate", icon: <BiSolidDonateHeart /> },
  { href: "/events", title: "Events", icon: <CgEventbrite /> },
  { href: "/projects", title: "Projects", icon: <FaHandsHelping />  },
  // { href: "/team", title: "Our Team", icon: <RiTeamFill />  },
  // { href: "/blog", title: "Blog", icon: <FaBlog /> },
  { href: "/social-media", title: "Social Media", icon: <FaFacebook /> },
];
