import React from 'react'
import './Header.css'
import AOS from "aos";
import "aos/dist/aos.css"
import {Link } from 'react-scroll';
function Header() {
  AOS.init({
    duration:2000
  })
  return (
    <div className='header' data-aos={"fade"}>
      <div className='main_header'>
      <div className='harsh'><span className='name'>Mohit </span>
      <span className='name1'>Panchal</span>
   
      </div>
      {/* <div className="list_buttons"> */}
      <div className='home__button'>
        <Link activeClass='active' to='home' spy={true} smooth={true}>
          <button>Home</button>
          </Link>
      </div>

      <div className='about__button'>
        <Link to="introduction" spy={true} smooth={true}>
          <button>About</button>
          </Link>
      </div>
     
      <div className='skills__button'>
      <Link to="skills" spy={true} smooth={true}>
          <button>Skills</button>
          </Link>
      </div>
      
      <div className='services__button'>
        <Link to="services" spy={true} smooth={true}>
          <button>Services</button>
          </Link>
      </div>
      
      <div className='work__button'>
      <Link to='contact_form' spy={true} smooth={true}>
          <button>Contact </button>
          </Link>
          
      </div>
      </div>
      
    </div>
  )
}

export default Header
