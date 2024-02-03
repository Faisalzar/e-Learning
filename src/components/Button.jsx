import React from 'react'

export default function Button({classes, text, type, onClick, icon}) {
    const eventHandler = ()=> window.alert("Add event handler to the button!")
  return (
    <button type ={type} className={`btn ${classes}`}  onClick={onClick ? onClick: eventHandler }>
        <div className="d-flex">{icon}
        {text? text: "Click"}
        </div>
        </button>
  )
}
