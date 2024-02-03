import React, { useState } from 'react'
import {BsStar, BsStarFill, BsTwitter} from "react-icons/bs"

export default function TestimonialCard({
    img,
    fullName,
    jobTitle,
    twitterHandle ,
    text,
    ratingStarts
 }) {

    const [rating, setRating] = useState(ratingStarts)
  return (
    <div className='card testimonial in-view'>
        <div className="card-header">
            <div className={`card-img ${img}`}></div>
            <div className="card-body">
                <h3 className="card-title">{fullName ? fullName : "Full Name"}</h3>
                <p className="card-text">{jobTitle ? jobTitle : "Job Title"}</p>
                <div>
                    <BsTwitter size={"1.5rem"}/>{twitterHandle ? twitterHandle : "Twitter Handle"}
                </div>
            </div>
        </div>
        <div className="card-body">
                <p className="card-text">{text ? text : "text"}</p>
            </div>
        <div className="card-footer d-flex">
           
            {[...Array(5)].map((star, i)=>{
                const ratingValue = i + 1
                return(
                    <label key={i} htmlFor='rating' 
                    onClick={()=>{setRating(ratingValue)}}
                    style={{cursor:"pointer", color:"gold", fontSize:"1.5rem"}}>
                <input type='radio' value={ratingValue}  style={{display:"none"}}/>
                {ratingValue <=rating ? <BsStarFill className="mr-1" /> : 
                <BsStar className="mr-1" />}
                    </label>
                )
            })}

        </div>
      
    </div>
  )
}
