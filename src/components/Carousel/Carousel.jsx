import React from 'react'
import './Carousel.css';

function Carousel() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
                  <div id="carouselExampleAutoplaying9" className="carousel slide" data-bs-ride="carousel">        
  <div className="carousel-inner carouse-banner">
    
    <div className="carousel-item active">
      <img src='./images/jit1.jpg' className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src='./images/jit2.jpg' className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src='./images/jit3.jpg' className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src='./images/jit4.jpg' className="d-block w-100" alt=""/>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying9" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying9" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
</div>


</div>
        </div>
      </div>

  )
}

export default Carousel
