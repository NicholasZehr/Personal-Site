import React, { useState } from "react";
import { projectData as projects } from "../ProjectData";
import { Slide } from "./";
export const ProjectPane = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [leftSlide, setLeftSlide] = useState(projects.length - 1);
  const [rightSlide, setRightSlide] = useState(1);

    const slideManager = (next, slide, setter) => {
        if (next) {
            if (slide === projects.length - 1) {
                setter(0)
            } else {
                setter(slide + 1);
            }
        }
        else {
            if (slide === 0) {
                setter(projects.length - 1);
            } else {
                setter(slide - 1);
            }
        }
    }
  const forwardClick = () => {
    slideManager(true, activeSlide,setActiveSlide)
    slideManager(true, leftSlide,setLeftSlide)
    slideManager(true, rightSlide,setRightSlide)
  };
  const reverseClick = () => {
    slideManager(false, activeSlide,setActiveSlide)
    slideManager(false, leftSlide,setLeftSlide)
    slideManager(false, rightSlide,setRightSlide)
  };

  return (
    <div className="box project-pane">
      {`This is your ProjectPane Component`}
      <button onClick={reverseClick}>Previous</button>
      <div className="presented-slides">
        <Slide project={projects[leftSlide]} left={true} />
        <Slide project={projects[activeSlide]} active={true} />
        <Slide project={projects[rightSlide]} right={true} />
      </div>
      <button onClick={forwardClick}>Next</button>
    </div>
  );
};

export default ProjectPane;
