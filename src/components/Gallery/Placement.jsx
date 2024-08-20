import React from 'react';
import './Placement.css';

const images = [
  { src: './images/plac2.jpg' },
  { src: './images/plac2.jpg' },
  { src: './images/plac3.jpg' },
  { src: './images/plac4.jpg'},
  { src: './images/plac2.jpg' },
  { src: './images/plac2.jpg'},
  { src: './images/plac3.jpg' },
  { src: './images/plac4.jpg'},
  // Add more images as needed
];

const Placement = () => {
  return (
    <div className="vihangam">
      {images.map((image, index) => (
        <div className="image-container" key={index}>
          <img src={image.src} alt={`College Function ${index + 1}`} />
          <span className="year">{image.year}</span>
        </div>
      ))}
    </div>
  );
};

export default Placement;
