import { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';

import Modal from './components/Modal';

import { AiFillHtml5, AiFillPlayCircle, AiFillUnlock } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { SiJavascript, SiDotnet, SiPowerbi } from "react-icons/si";
import { FaReact, FaPython, FaJava, FaAngular, FaFileExcel, FaMapMarkedAlt, FaFileDownload } from "react-icons/fa";
import { PiFileSqlDuotone } from "react-icons/pi";
import CategoryCards from './components/page-component/CategoryCards';
import OffersCard from './components/page-component/OffersCard';

import TestimonialsList from './components/Lists/TestimonialsList';
import LoginForm from './components/page-component/LoginForm';
import RegistrationForm from './components/page-component/RegistrationForm';


function App() {

  const [showCourse, setShowCourse] = useState(false)
  const [showOffers, setShowOffers] = useState(false)
  const [login, setLogin] = useState(false)

  function handleLoginFormValidate(){
    setForms({ ...forms, loginForm: false });
    setShowCourse(false);
    setLogin(true)
  }
  function startLearningEvent() {
    setShowCourse(true)
  }

  function cancelLearningEvent() {
    setShowCourse(false)
  }

  const handleShowOffers = ()=>{
showOffers === false ? setShowOffers(true) : setShowOffers(false)
  }

  const offersRef = useRef()

  const handleScrollToOffer = ()=>{
   offersRef.current.scrollIntoView({behavior:"smooth"})
  }

  const [goToTopArrow, setGoToTopArrow] = useState(false) 

  const topRef = useRef()

  const handleGoToTop = ()=>{
    topRef.current.scrollIntoView({behavior:"smooth"})
  }

  

  function scrollFunction(){
if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
  setGoToTopArrow(true)
}else{
  setGoToTopArrow(false)
}
  }

  useEffect(()=>{
    window.onscroll = ()=> scrollFunction()
  })

const [forms, setForms] = useState({
  loginForm: false,
  registrationForm: false,
})

const handleShowLoginForm = ()=>{
  setForms({ registrationForm:false ,loginForm:true})
}

const handleCancelLoginForm = ()=>{
  setForms({...forms,loginForm:false})
}



const handleCancelRegistrationForm = ()=>{
  setForms({...forms,registrationForm:false})
}

function handleShowRegistrationForm(){
setForms({loginForm: false, registrationForm: true})
}

  const offerList = [
{
  icon_1: <AiFillUnlock className='i' size={"2em"}/>,
  title: "Tons of Content",
  text: "We have library of over 100,000 videos that will help you learn to code"
  
},
{
  icon_1: <FaMapMarkedAlt className='i' size={"2em"}/>,
  title: "Guided Courses",
  text: "We guided you with series of videos that will help you learn to code"
  
},
{
  icon_1: <FaFileDownload className='i' size={"2em"}/>,
  title: "Project File Downloads",
  text: "File form project are availablefor all of our courses to be downloaded."
  
}

  ]

const moreOffersList =[
  {
  icon_1: <AiFillUnlock className='i' size={"2em"}/>,
  title: "Tons of Content",
  text: "We have library of over 100,000 videos that will help you learn to code"
  
},
{
  icon_1: <FaMapMarkedAlt className='i' size={"2em"}/>,
  title: "Guided Courses",
  text: "We guided you with series of videos that will help you learn to code"
  
},
{
  icon_1: <FaFileDownload className='i' size={"2em"}/>,
  title: "Project File Downloads",
  text: "File form project are availablefor all of our courses to be downloaded."
  
}
]


  return (
    <>
      <div className="container container-lg" ref={topRef}>
        <br />
        <br />
        <br />
        
        <Header handleScrollToOffer={handleScrollToOffer} startLearningEvent={startLearningEvent}/>
          
        <main>
          <section className='categories mt-7' >
            <Title text="Top categories" classes={"subtitle text-center"} />
            <div className="categories-container d-flex mt-4">
               {/* HTML, CSSS, JS */}
              <CategoryCards  title={"Web Development"}
                icon_1={<AiFillHtml5 size={"4em"} className="icon html5" style={{cursor:"pointer"}}/>}
                icon_2={<DiCss3Full size={"4em"} className="icon css3" style={{cursor:"pointer"}}/>}
                icon_3={<SiJavascript size={"4em"} className="icon js" style={{cursor:"pointer"}} />}
                btnIcon={<AiFillPlayCircle size={"2em"} />}
                startLearnEvent={startLearningEvent}>
                <span className='fs-lg'>Learn how to build web apps with:</span>
                <ul className='mt-1'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </CategoryCards>
              {/* DATABASES, SERVERS AND APIs*/}
              <CategoryCards title={"Mobile Development"}
                icon_1={<FaReact size={"4em"} className="icon react" style={{cursor:"pointer"}}/>}
                icon_2={<FaAngular size={"4em"} className="icon angular" style={{cursor:"pointer"}}/>}
                icon_3={<SiJavascript size={"4em"} className="icon js" style={{cursor:"pointer"}}/>}
                btnIcon={<AiFillPlayCircle size={"2em"} />}
                startLearnEvent={startLearningEvent}>
                <span className='fs-lg'>Learn how to build mobile apps with:</span>
                <ul className='mt-1'>
                  <li>React Native</li>
                  <li>Angular</li>
                  <li>JavaScript</li>
                </ul>
              </CategoryCards>
              {/* Data Science */}
              <CategoryCards title={"Data Science "}
                icon_1={<FaPython size={"4em"} className="icon python" style={{cursor:"pointer"}}/>}
                icon_2={<SiDotnet size={"4em"} className="icon css3" style={{cursor:"pointer"}}/>}
                icon_3={<FaJava size={"4em"} className="icon angular" style={{cursor:"pointer"}}/>}
                btnIcon={<AiFillPlayCircle size={"2em"} />}
                startLearnEvent={startLearningEvent}>
                <span className='fs-lg'>Learn how to analyze data with:</span>
                <ul className='mt-1'>
                <li>Python</li>
                  <li>.Net</li>
                  <li>Java</li>
                </ul>
              </CategoryCards>
              {/* Business */}
              <CategoryCards title={"Business"}
                icon_1={<FaFileExcel size={"4em"} className="icon file-excel" />}
                icon_2={<SiPowerbi size={"4em"} className="icon power-bi" />}
                icon_3={<PiFileSqlDuotone size={"4em"} className="icon sql" />}
                btnIcon={<AiFillPlayCircle size={"2em"} />}
                startLearnEvent={startLearningEvent}>
                <span className='fs-lg'>Learn how to analyze data with:</span>
                <ul className='mt-1'>
                  <li>Excel</li>
                  <li>Power BI</li>
                  <li>SQL</li>
                </ul>
              </CategoryCards>
              
            </div>
          </section>
          <section className='offers container container-md p-2' ref={offersRef}>
            <Title classes={"subtitle text-center mb-4"}
            text={"Here's what you get"}/>
            <div className="offers-container">
             

            {offerList.map((offers, index)=>(
                  <OffersCard key={index}  icon_1={offers.icon_1}  title={offers.title}
                  text={offers.text}
                  ></OffersCard>
            ))} 
            </div>
            {showOffers && <div className="offers-container fadeIn">
            {moreOffersList.map((offers, index)=>(
                  <OffersCard key={index}  icon_1={offers.icon_1}  title={offers.title}
                  text={offers.text}
                  ></OffersCard>
            ))}
            </div>}
            <a 
            onClick={handleShowOffers}
            style={{cursor:"pointer",textDecoration:"underline"}}>
              <h4 className="text-center text-primary mt-2">
                {showOffers? "Less" : "More..."}
              </h4>
            </a>
          </section>
          <section className="testimonials my-4">
            <Title classes={"subtitle text-center mb-4"} text={"What our users say"}/>
            <div className="testimonials-container">
            
              <TestimonialsList/>
            </div>
          
          </section>
        </main>
       
      
      </div>
      {showCourse && (
        <Modal
          title={"Access denied"}
          text="Please login in order to access this content"
          cancelEvent={cancelLearningEvent}
          loginEvent={!login && handleShowLoginForm}
         
        />
      )}
      {
        goToTopArrow && <BsArrowUpCircleFill className="goToTopArrow" onClick={handleGoToTop}/>
      }

      {forms.loginForm && <div className="modal">
        <LoginForm handleCancel={handleCancelLoginForm} 
       showRegister={handleShowRegistrationForm} loggedIn={handleLoginFormValidate}/></div> }

      
       {forms.registrationForm && <div className="modal">
        <RegistrationForm handleCancel={handleCancelRegistrationForm} 
        showLogin={handleShowLoginForm}/></div> }

        
    </>
  );
}

export default App;
