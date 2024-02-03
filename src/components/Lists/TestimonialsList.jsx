import React, { useEffect, useState } from 'react'
import TestimonialCard from '../page-component/TestimonialCard'
import testimonialData from "../../db/testimonial-List.json"
import Button from "../Button"
import ErrorBoundaries from '../Custom Hooks/ErrorBoundaries'


export default function TestimonialsList({}) {


    const [testimonials, setTestimonials] = useState(()=>{
      return JSON.parse(localStorage.getItem("testimonialData"))
    })

const [data, setData] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const [hasError, setHasError] = useState(false)


let parseData

const getLocalData = ()=>{
  setIsLoading(true)
  setHasError(false)
  function getRandomInt(){
    return Math.floor(Math.random() * 4)
  }
  setTimeout(()=>{
    parseData= JSON.parse(localStorage.getItem('testimonialData'))
    // setData(parseData)
    if(getRandomInt() < 2){
      setHasError(true)
      
    }else{
setData(parseData)
    }
    setIsLoading(false)
  },2000)
  console.log(data)
}

    useEffect(()=>{
      // setTestimonials(testimonialData)
      localStorage.setItem('testimonialData',JSON.stringify(testimonialData))
      const fetchData = async()=>{
        try{
          setIsLoading(true)
          getLocalData()
        }catch(error){
          // console.log(hasError)
          setHasError(error)
          setIsLoading(false)
        }
      }
      fetchData()
    },[!data])

if(isLoading){
  return <div className="alert alert-warning">Loading...</div>
}



  return (<>
<ErrorBoundaries hasError={hasError} handleError={getLocalData}>
{data && data.map((items)=>(
  <TestimonialCard key={items.id} img={items.img} fullName={items.fullName} 
  jobTitle={items.jobTitle} twitterHandle={items.twitterHandle} text={items.text}/>))}
</ErrorBoundaries>
  </>
   
  )
}
