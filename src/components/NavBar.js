import React from "react";
import { Link } from "react-router-dom";
import ProjectTab from "./ProjectTab";

export const NavBar = (props) => {
  return (
    <div className="box nav-bar">
      <nav>
        <Link to="about">About</Link>
        <Link to="/">Home</Link>
        <ProjectTab>Projects</ProjectTab>
      </nav>
    </div>
  );
};

export default NavBar;
