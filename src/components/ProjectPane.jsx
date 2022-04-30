import React from 'react'
import {Percolate, Sytime, GraceShopper} from './Projects'

export const ProjectPane = (props) => {
    return (
        <>
            <div>{`This is your ProjectPane Component`} </div>
            <Percolate />
            <Sytime />
            <GraceShopper />
        </>
    )
}

export default ProjectPane