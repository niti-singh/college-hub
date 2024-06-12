import React from 'react'
import './Footer1.css'
import {MdLocationOn} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'
import {FaLink} from "react-icons/fa";
import {RiFacebookFill} from 'react-icons/ri';
import {FiInstagram} from 'react-icons/fi'
import {GrLinkedinOption} from 'react-icons/gr'
import {Link} from 'react-router-dom';
const Footer1 = () => {
  return (
    <div>
          <footer className="footer">
  	 <div className="footer-container">
  	 	<div className="row">
  	 		<div className="footer-col adress">
  	 			<h4>ADDRESS</h4>
  	 			<ul>
  	 				<li><span><MdLocationOn/></span>JIT Borawan, Tel - Kasrawad, Dist- Khargone </li>
  	 				<li><span><BsTelephoneFill/></span>986346786</li>
  	 				<li><Link to="https://www.digitalsavers.in/" target="blank"><span><FaLink/></span>JITBorawan</Link></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col snetwork">
  	 			<h4>SOCIAL NETWORK</h4>
  	 			<ul>
  	 				<li><Link to="https://www.facebook.com/jitengineering/" target='blank'><span><RiFacebookFill/></span>JIT.in</Link></li>
  	 				<li><Link to="https://www.instagram.com/jitborawan/" target='blank'><span><FiInstagram/></span>JIT.in</Link></li>
  	 				<li><Link to="https://www.linkedin.com/in/jit-placement-36a2522a/?originalSubdomain=in" target='blank'><span><GrLinkedinOption/></span>JIT.in</Link></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Links List</h4>
  	 			<ul>
  	 				<li><Link to="/about">About Us</Link></li>
  	 				<li><Link to="/helpline">Helpline</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<div className="social-links">
                    <img src='./images/jitlogo.png' height="100px" width="150px"/><br/>
                    
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>     
    </div>
  )
}

export default Footer1