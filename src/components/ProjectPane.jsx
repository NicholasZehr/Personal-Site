import React, { useState } from "react";
import { Slide } from "./";
export const ProjectPane = ({ projects }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [leftSlide, setLeftSlide] = useState(projects.length - 1);
  const [rightSlide, setRightSlide] = useState(1);
  const [lastClick, setLastClick] = useState(false);
  const slideManager = (next, slide, setter) => {
    if (next) {
      if (slide === projects.length - 1) {
        setter(0);
      } else {
        setter(slide + 1);
      }
    } else {
      if (slide === 0) {
        setter(projects.length - 1);
      } else {
        setter(slide - 1);
      }
    }
  };
  const forwardClick = () => {
    slideManager(true, activeSlide, setActiveSlide);
    slideManager(true, leftSlide, setLeftSlide);
    slideManager(true, rightSlide, setRightSlide);
    setLastClick(true);
  };
  const reverseClick = () => {
    slideManager(false, activeSlide, setActiveSlide);
    slideManager(false, leftSlide, setLeftSlide);
    slideManager(false, rightSlide, setRightSlide);
    setLastClick(false);
  };

  return (
    <>
    {projects.length ? (
      <div className="box project-pane">
          <button onClick={reverseClick}>Previous</button>
          <div className="presented-slides">
            <Slide project={projects[leftSlide]} />
            <Slide
              project={projects[activeSlide]}
              lastClick={lastClick}
              active={true}
            />
            <Slide project={projects[rightSlide]} />
          </div>
          <button onClick={forwardClick}>Next</button>
      </div>
      ) : (
        <div>Loading Your Requested Projects...</div>
      )}
      </>
  );
};

export default ProjectPane;
