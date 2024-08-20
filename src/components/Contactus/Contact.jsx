import React, { useRef } from 'react'
import './Contact.css';
import { ImMail4 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillGooglePlusSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lnta75a', 'template_jy1hunf', form.current, '6EDTWzsTyYLCsDbNb')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent")
          document.getElementById("myForm").reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact-body'>
      <div className="contact-title">
      <h2>COMMON QUETIONS</h2>
      <h1>LET'S GET IN TOUCH</h1>
      </div>


      <div className='contact-input'>
     
      <div className='contact-btn'>
        <form onSubmit={sendEmail} id='myForm' ref={form}>
        <div className='m-3'>
        <input className='contact-input-text' type='text' placeholder='Name' size={68} name='user_name' ></input>
        </div>
        <div className='m-3'>
        <input className='contact-input-text' type='email' placeholder='email' size={68} name='user_email' ></input>
        </div>
        <div className='m-3'>
        <textarea rows={5} cols={70} placeholder='message' name='user_message' ></textarea>
        </div>
        <button className='submitbutt' value="Send" type="submit">Submit</button>
        </form>
      </div>

      </div>
 

        <div className='contac-email-box'>
          <div className="contact-email-sub-box">
      <div className='contact-email'>
        <ImMail4 className='contact-email-icon'/>
        <span>Email Address</span>
        <a href='mailto: thedigitalsavers@gmail.in'><span>Jitborawan@gmail.in</span></a>
      </div>
      <div className='contact-phone'>
        <BsFillTelephoneFill className="contact-phone-icon"/>
        <span>Call Us</span>
        <a href='tel://7415033166'><span>7415033166</span></a>
      </div>
      </div>
      </div>

      <div className="contact-social" >
        <div className="contact-social-title">
         <span style={{color:'#f89d2a'}}>|</span> OUR SOCIAL MEDIA
        </div>
        <div  className="contact-social-links">
          <Link to="https://www.facebook.com/jitengineering/" className='contact-social-links-icon'><FaFacebookSquare/></Link>
          <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fjitborawan" className='contact-social-links-icon'><AiFillTwitterSquare/></Link>
          <Link to="https://jitechno.com/" className='contact-social-links-icon'><AiFillGooglePlusSquare/></Link>
          <Link to="https://www.instagram.com/jitborawan/" className='contact-social-links-icon'><FaInstagramSquare/></Link>
        </div>
      </div>


    </div>
  )
}

export default Contact
