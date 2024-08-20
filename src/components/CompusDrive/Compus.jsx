import React from 'react';
import './Compus.css';

const images = [
  { src: './images/compus2.jpg' },
  { src: './images/compuse.jpg' },
  { src: './images/compuse.jpg' },
  { src: './images/compus2.jpg'},
  { src: './images/compus2.jpg' },
  { src: './images/compus3.jpg'},
  { src: './images/compuse.jpg' },
  { src: './images/compus2.jpg'},
  // Add more images as needed
];

const Compus = () => {
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

export default Compus;
