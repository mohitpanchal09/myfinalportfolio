import React from 'react'
import './Skills.css';
import AOS from "aos";
import "aos/dist/aos.css";
function Skills() {
  AOS.init({
    duration:2000
  })
  return (
    <div className='skills' data-AOS={"fade"}>
      <div className="skills1">
      <h1 className='headingmy'>My Skills</h1>
      
      <li><p className='head1'>html 80%</p>
      
      <span className='bar'><span className='html'></span></span>
      </li>
      <li><p className='head2'>css 70%</p>
      <span className='bar'><span className='css'></span></span>
      </li>
      <li><p className='head3'>js 45%</p>
      <span className='bar'><span className='js'></span></span>
      </li>
      <li><p className='head4'>reactjs 80%</p>
      <span className='bar'><span className='reactjs'></span></span>
      </li>
    </div>
    <  img className='boy__sitting' src="mohitsitting.png" alt="" data-aos={"fade-down"} />
    </div>
    
  )
}

export default Skills
