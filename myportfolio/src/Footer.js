import React from 'react'
import './Footer.css'
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css"
function Footer() {
  AOS.init({
    duration:2000
  })
  return (
    <div className='footer' data-aos={"fade"}>
      
        <h1 className='footer__name'>Mohit Panchal</h1>
        <div className="contact__link">
        
          <ul className='sb'>
            <a className='hello1' href='https://github.com/mohitpanchal09'>< AiFillGithub/></a>
            <a className='hello1' href="https://www.linkedin.com/in/mohit-kumar-0ba38b195/"><AiFillLinkedin/></a>
            <a className='hello1' href="https://instagram.com/mohitpanchal___?utm_medium=copy_link"><AiFillInstagram/></a>
          </ul>
        
        </div>
        <p className='copy'><AiOutlineCopyrightCircle/><span> 2022,All rights reserved.</span></p>
     
    </div>
  )
}

export default Footer;