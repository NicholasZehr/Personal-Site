import React, { useState, useEffect, useRef } from 'react'

const Slide = (props) => {
    const{project, active} = props
    const { name, description, photoURL } = project
    const [transit, setTransit] = useState(false)
    useEffect(() => {
        setTransit(false)
        setTimeout(() => {
            if (!active) {
                console.log("run the transit thing")
                setTransit(true)
            }
        }, 500);
    }, [name, active])
   
return (
    <div className={`slide box ${active ? 'active' : transit ? 'inactive-after': 'inactive-before'}`} >{`This is your Slide Component`} 
        <div>{name}</div>
        <div>{description}</div>
        <img className="fade-in-image" src={photoURL} alt="Project" title="source: imgur.com" />
    </div>
)}

export default Slide