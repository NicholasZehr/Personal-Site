import React from "react";
import { Link } from "react-router-dom";
import ProjectTab from "./ProjectTab";

export const NavBar = (props) => {
  return (
    <div className="box nav-bar">
      <nav>
        <div className="link-stabilizer">
          <Link to="about">About</Link>
        </div>
        <div className="link-stabilizer">
          <Link to="/">Home</Link>
        </div>
        <ProjectTab>Projects</ProjectTab>
      </nav>
    </div>
  );
};

export default NavBar;
