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
                    ${active ? 'active' : transit ? 'inactive inactive-after' : 'inactive inactive-before'}
                    ${active && !transit ? lastClick ?
                     'carousel-from-next' :
                    'carousel-from-previous' : ''}
                    `} >{`This is your Slide Component`} 
        <div>{name}</div>
        <div>{description}</div>
        <img className={`${active && !transit ?
                     'fade-in-image' :
                    '' }`} src={photoURL} alt="Project" title="source: imgur.com" />
    </div>
)}

export default Slide