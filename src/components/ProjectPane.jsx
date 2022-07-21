import React, { useState } from 'react'
import { projectData as projects } from "../ProjectData"
import {Slide} from './'
export const ProjectPane = () => {
    const [active, setActive] = useState(0)

    const forwardClick = () => {
        if (active === projects.length - 1) {
            setActive(0)
        }
        else {
            setActive(active + 1)
        }
    }

    const reverseClick = () => {
        if (active === 0) {
            setActive(projects.length - 1)
        }
        else {
            setActive(active - 1)
        }
    }


    return (
        <div className="project-pane">
            <div className="box">{`This is your ProjectPane Component`} 
               <button onClick={forwardClick}>Next</button>
             <Slide project={projects[active]} /> 
                <button onClick={reverseClick}>Previous</button>
            </div>
        </div>
    )
}

export default ProjectPane