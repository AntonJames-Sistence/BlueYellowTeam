import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

const NavBarWrapper = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default NavBarWrapper;
