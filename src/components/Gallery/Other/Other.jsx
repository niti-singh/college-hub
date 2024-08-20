import React from "react";
import Otherdata from "./Otherdata";

import "./Other.css";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="container service-container">
      <div className='Service-heading'>
            <h2>Other Activities
              <br/>
              <hr className="cardsline-hr" />
            </h2>
        </div>
      <div class="row ">
        {Otherdata.map((e) => {
          return (
            <>
           
              <div class="col-sm-6 col-md-4 col-lg-3 mb-sm-0">
                <div className="main-cards">
                <Link to={e.link}>
                  <div class="card">
                    <img src={e.img} style={{opacity: "0.4", height: "190px", width: "100%",}} alt="icon"/>
                    <div class="card-body card-img-overlay">
                     
                      <h5 class="card-title">{e.heading}</h5>
                    </div>
                  </div>
                  </Link>
                </div>
        </div>
       
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
