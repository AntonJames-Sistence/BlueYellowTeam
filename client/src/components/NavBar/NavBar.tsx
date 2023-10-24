import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import "./NavBar.css";
// @ts-ignore
import logo from "./blue-yellow-logo.png";

const NavBar = () => {
  return (
    <nav id="Nav">
      <Link to="/" className="Nav-img">
        <img src={logo} alt="" />
      </Link>
      <div className="Nav-links">
        <div className="Nav-link">Donations</div>
        {/* <NavLink to="#FeaturedProjects">Donations</NavLink> */}
        <div>&nbsp;/&nbsp;</div>
        <div className="Nav-link">Events </div>
        <div>&nbsp;/&nbsp;</div>
        {/* <div className="Nav-link">Projects </div> */}
        <NavHashLink
          to="/#FeaturedProjects"
          className="Nav-link"
          activeClassName="Nav-link-on"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          smooth
        >
          Projects
        </NavHashLink>
        <div>&nbsp;/&nbsp;</div>
        <div className="Nav-link">Shop</div>
      </div>
      <div className="auth">
        <div>Login</div>
        <div>&nbsp;/&nbsp;</div>
        <div>SignUp</div>
      </div>
    </nav>
  );
};

export default NavBar;
