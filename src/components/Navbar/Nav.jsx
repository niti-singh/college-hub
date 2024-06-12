import React from 'react'
import './nav.css';
import {GrMail} from 'react-icons/gr'
import {MdCall} from 'react-icons/md'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
// import {FaLinkedinIn} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>

<div className="title-container-front">
        <div className="title-contact-front">
          <div className="tc-box-front">
          <marquee width="90%" direction="left" height="50px" style={{fontSize:"20px" , fontWeight:500, marginTop:"10px"}}>
          This is College Hub Website 
            </marquee>
            </div>
        </div>
    </div>


     {/* navbar title section start  */}
    <div className="title-container">
        <div className="title-contact">
          <div className="tc-big-box">
          <div className="tc-box khargonelink">
               <Link to="/"><span><HiLocationMarker /></span>JIT Borawan</Link>
            </div>
            <div className="tc-box">
               <Link to="/"><span><GrMail /></span>jitborawan.com</Link>
            </div>
            <div className="tc-box">  
               <Link to="/"><span><MdCall/></span>+91-9864678764</Link>
            </div>
            </div>
        </div>
        {/* <div id='google_element' className='translator'></div> */}
        <div className="title-links">
            <Link to="https://www.facebook.com/jitengineering/" className='social-nav-icon'><FaFacebookF/></Link>
            <Link to="https://www.instagram.com/jitborawan/" className='social-nav-icon'><AiFillInstagram/></Link>
            {/* <Link to="https://www.linkedin.com/company/digitalsavers/" className='social-nav-icon'><FaLinkedinIn/></Link> */}
        </div>
    </div>
    {/* navbar title section end  */}

    {/* navbar link logo & link section start  */}
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* <img src="./images/digital.jpg" alt=''/>
            <span>Digital<br/>Savers</span> */}
            <img src='./images/jitlogo.png' alt=''/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/" id='activelink'>
                  Home Page
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/cards">
                  College Hub
                </Link>
              </li>
             
              
              <li className="nav-item">
                <Link className="nav-link tubelight-animation " aria-current="page" to="/faculty">
            Faculty
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/contact">
                  Contact Us
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>          </div>
  )
}

export default Nav
