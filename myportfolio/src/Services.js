import React from 'react'
import './Services.css'
import {BiPaint} from "react-icons/bi";
import {MdEngineering} from "react-icons/md";
import {BsArrowDownLeftSquare} from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
function Services() {
  AOS.init({
    duration:2000
  })
  return (
    <div className='services' data-aos={"fade"}>
        
      <div className="services1">
      <h2>Web Developer <BiPaint /></h2>
      
      <p>Design and develop scalable and user-friendly web application interface. God of screen visuals and functionality. I position your company brand.</p>
    </div>
    <div className="services2">
    <h2>Web-Infrastructure Developer <b><BsArrowDownLeftSquare/></b> </h2>
      
      <p>Build and maintain web servers, Databases and API's. Ensure that Frontend operations are smooth. Able to understand requirements & able to creatively solve user-centered issues.</p>
    </div>
    <div className="services3">
      <h2>ML Engineer <MdEngineering/> </h2>
      <p>Build prediction models that help companies get better insights,

automate ml process to improve efficiency of one's company.</p>
    </div>
    </div>
  )
}

export default Services