import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar, AboutMe, ProjectPane } from "./components";
import Contact from "./components/Contact";
function App() {
  return (
    <div id="app">
      <NavBar />
      <Routes>
        <Route path="about" element={<AboutMe />}>About Me </Route>
        <Route path="projects" element={ <ProjectPane />}>About Me </Route>
      </Routes >
      <Contact />
    </div>
  );
}

export default App;
