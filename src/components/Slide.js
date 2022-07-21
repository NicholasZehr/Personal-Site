import React from 'react'

const Slide = (props) => {
    const project = props.project
    const {name, description} = project
return (
    <div className='box'>{`This is your Slide Component`} 
        <div>{name}</div>
        <div>{description}</div>
    </div>
)}

export default Slide