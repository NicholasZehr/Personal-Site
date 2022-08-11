import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar, AboutMe, ProjectPane, Home } from "./components";
import { projectData as projects } from "./ProjectData";
import Contact from "./components/Contact";
function App() {
  const [studentProjects, setStudentProjects] = useState([]);
  const [personalProjects, setPersonalProjects] = useState(projects);
  const [coworkerProjects, setCoworkerProjects] = useState([]);
  return (
    <div id="app">
      <NavBar />
      <Routes>
        <Route path="about" element={<AboutMe />} />
        <Route path="projects">
          <Route
            path="personal"
            element={<ProjectPane projects={personalProjects} />}
          />
          <Route
            path="student"
            element={<ProjectPane projects={studentProjects} />}
          />
          <Route
            path="coworkers"
            element={<ProjectPane projects={coworkerProjects} />}
          />
        </Route>
        <Route path="home" element={<Home />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
