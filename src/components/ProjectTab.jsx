import React from 'react'
import { Link } from "react-router-dom"

const ProjectTab = (props) => {
return (
    <div className='project-tab'>
        <button className="project-tab-button">Projects</button>
        <Link className="project-tab-link" to="projects/personal">Personal Projects</Link>
        <Link className="project-tab-link" to="projects/student">Student Work</Link>
        <Link className="project-tab-link" to="projects/coworker">Co-Worker Flexes</Link>
 </div>
)}

export default ProjectTab