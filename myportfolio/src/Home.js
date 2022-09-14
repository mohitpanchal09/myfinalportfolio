import React from 'react'
import './Home.css';
import { AiFillGithub } from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css"
function Home() {
  AOS.init({
    duration:2000
  });
  return (
    <div className='home'>
        <div className="row1" data-aos={"fade"}>
        <div className="box">
        <div className="home__image">
        <img id="img1" src="boycup.png"/>
        </div>
            <ul>
            <li>Hi,</li>
            <li >I am  <span id="my__name">Mohit Panchal</span> </li>
            <li>Frontend Developer</li>
            <li>And AI Engineer</li>
            <li><a href="https://drive.google.com/file/d/1PlmLBx_f2S-65MFO6G0yQJ9UJP2YRbX-/view?usp=sharing"><button className='resume__button'>Resume</button></a></li>
            <div className='lgf'>
            <li><a href='https://github.com/mohitpanchal09'><AiFillGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/mohit-kumar-0ba38b195/"><AiFillLinkedin/></a></li>
            <li><a href="https://instagram.com/mohitpanchal___?utm_medium=copy_link"><AiFillInstagram/></a></li>
            </div>
            
        </ul>
        
        </div>
        
        
        </div>
            
        
        
        
    </div>
  )
}

export default Home;