import React, { useState, useEffect } from 'react'

const Slide = (props) => {
    const{project, left, right, active} = props
    const { name, description, photoURL } = project
    const [transit, setTransit] = useState(false)
    useEffect(() => {
        function loadMeUp() {
            setTimeout(() => {
                setTransit(true)
            }, 0)
        }
        loadMeUp()
    },[active])
    const findPosition = () => {
        if (left || right) {
            if (left) {
                return "behind left"
            }
            else {
                return "behind right"
            }
        }
        else if (active){
         return "active"
        }
        else {
            return ""
        }
    }

return (
    <div className={`slide box ${transit ? findPosition() : ''}`} >{`This is your Slide Component`} 
        <div>{name}</div>
        <div>{description}</div>
        <img src={photoURL} alt="Project" title="source: imgur.com" />
    </div>
)}

export default Slide