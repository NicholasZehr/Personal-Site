import React from 'react'
import { Percolate, Sytime, GraceShopper } from './Projects'

export const ProjectPane = (props) => {
    return (
        <div className="project-pane">
            <div className="box">{`This is your ProjectPane Component`} 
                <Percolate />
                <Sytime />
                <GraceShopper />
            </div>
        </div>
    )
}

export default ProjectPane