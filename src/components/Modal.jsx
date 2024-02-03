import React from 'react'
import Button from "./Button"

export default function Modal({title, text, loginEvent, cancelEvent }) {
  return (
    <div className='modal'>
    <div className="modal-content fadeIn-2ms">
            <h1 className='mb-1' style={{color: "#bb2124" }}>{title}</h1>
            <p className="mb-1">{text ? text : "Modal content goes here!"}</p>
            <div className="d-flex space-between">
                <Button classes={"btn-primary"} text={"Login"} onClick={loginEvent}/>
                <Button text={"Cancel"} onClick={cancelEvent}/>
            </div>
        </div>
        </div>
  )
}
