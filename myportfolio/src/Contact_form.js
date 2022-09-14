import React from 'react'
import './Contact_form.css';
import AOS from "aos";
import "aos/dist/aos.css";
// import emailjs from 'emailjs-com';
function Contact() {
  
  AOS.init({
    duration:2000
  })
  return (
    <div className='contact_form' data-aos={"fade"}>
        <div className="contact_box">
          <h2>Contact Me</h2>
<form action="">
    <input type="text" className='input_field' placeholder='Your Name'/>
    <input type="email" className='input_field' placeholder='Your E-mail'/>
    
    <textarea type='text'className='myar' placeholder='Your Message' ></textarea>
</form>
<button className='send_btn' >Send Message</button>
        </div>
    </div>
  )
}

export default Contact