import React from 'react'
import './Introduction.css'
import AOS from "aos";
import "aos/dist/aos.css"
function Introduction() {
  AOS.init({
    duration:2000
  })
  return (
    <div className='introduction' data-aos={"fade"}>
      <div className="box2">
        <h1 className='abt__heading'>About Me <hr className='hrtag'/></h1>
        <div className='row2'>
        <div className="intro">
        <p>
        I am a frontend developer and AIML Engineer , i have expertise in many programming languages like java,python,c etc and worked in many projects like MediPocket and Amazon Clone. I have tirelessely developed my skills to put them in use to bring fruits for my upcoming startup.
        </p>
        <img className='boy__image' src="mohitstanding.png"/>
        </div>
        
        </div>
        </div>
    </div>
  )
}

export default Introduction