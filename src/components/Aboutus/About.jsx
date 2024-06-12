import React from 'react'
import './About.css';

function About() {
  return (
    <div>
        <div className='About-heading'>
            <h2>About Us
            <br/>
              <hr className="about-hr" />
            </h2>
        </div>
      <div>
      <div className="About-container">
        <div className="about-box">
            <div className="about-img">
                <img src="./images/jit1.jpg" alt="" />
            </div>
            <div className="about-text">
            <h1>Welcome to College Hub</h1>
            
            </div>
        </div>
    </div>
      </div>



      <div>
      <div className="About-container">
        <div className="about-box ab-1">
            <div className="about-text">
            <h1>Our Mission </h1>
           
            </div>
            <div className="about-img01">
                <img src="./images/jit3.jpg" alt="" />
            </div>
        </div>
    </div>
      </div>

      <div>
      <div className="About-container ac-3">
        <div className="about-box  ab-2 container">
            
        </div>
    </div>
      </div>

    </div>
  )
}

export default About