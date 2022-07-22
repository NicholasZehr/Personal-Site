import React from 'react'

const Slide = (props) => {
    const project = props.project
    const {name, description, photoURL} = project
return (
    <div className='box'>{`This is your Slide Component`} 
        <div>{name}</div>
        <div>{description}</div>
        <img src={photoURL} alt="Project" title="source: imgur.com" />
    </div>
)}

export default Slide