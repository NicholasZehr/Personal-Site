import React, { useState, useEffect } from 'react'

const Slide = (props) => {
    const{project, active, lastClick} = props
    const { name, description, photoURL } = project
    const [transit, setTransit] = useState(false)
    useEffect(() => {
        setTransit(false)
        setTimeout(() => {
                setTransit(true)
        }, 500);
    }, [ active, name])
   
return (
    <div className={`slide box 
                    ${active ? 'active' : transit ? 'inactive-after' : 'inactive-before'}
                    ${active && !transit ? lastClick ?
                     'fade-in-image-next' :
                    'fade-in-image-previous' : ''}
                    `} >{`This is your Slide Component`} 
        <div>{name}</div>
        <div>{description}</div>
        <img className={``} src={photoURL} alt="Project" title="source: imgur.com" />
    </div>
)}

export default Slide