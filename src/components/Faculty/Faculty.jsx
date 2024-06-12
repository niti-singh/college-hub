import React from 'react'
import { MdCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import "./Faculty.css";
import FacultyData from './FacultyData';
import { Link } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Faculty = () => {
  return (
    <div>
      <div className="service-title-container-back">
        <Link to="/cards"><span><AiOutlineArrowLeft className='Back-btn-icon' /></span></Link> 
    </div>
        <div className="faculty-text">
        <h1 className="faculty">
          College Faculties
          <br />
          <hr className="faculty-hr" />
        </h1>
        <p className="facultycontaint">
        Explore our dedicated faculties page to discover the diverse range of educators shaping the 
        academic landscope at our institution. From seasoned professors to dynamic instructors, gain insights into
        their expertise, reaserch interests, and contributions to student success. Get to know the mentors who inspire,
        guide, and empower our students towords excellence.
        </p>
      </div>
      <div class="container faculty-cards-container">
        {/* <div className="container">*/}
        <div className="row">
          {FacultyData.map((p) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-6 col-sm-12 faculty-card"
                  style={{ display: "flex", margin: "5px 0 5px 0" }}
                >
                  <div className="faculty-card-subbox">
                    <div class="col-md-5 col-sm-4">
                      <center>
                        {" "}
                        <img
                          src={p.image1}
                          class="img-fluid rounded-start"
                          alt="..."
                        />
                      </center>
                    </div>
                    <div class="col">
                      <div class="card-body">
                        <h5 class="card-title mt-3 text-center">{p.Name1}</h5>
                        <p class="card-text mb-0 mt-2 text-center ">
                          <span
                            className="m-2 fs-4"
                            style={{ color: "#f89d2a" }}
                          >
                            <MdCall />
                          </span>
                          {p.Contact1}
                        </p>
                        <p class="card-text text-center">
                          <span
                            className="m-2 fs-4"
                            style={{ color: "#f89d2a" }}
                          >
                            <MdLocationPin />
                          </span>
                          {p.Address1}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Faculty;
