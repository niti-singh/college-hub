import React from 'react';
import './Tournament.css';

const images = [
  { src: './images/turna1.jpg', year: '2024' },
  { src: './images/turna1.jpg', year: '2022' },
  { src: './images/turna1.jpg', year: '2024' },
  { src: './images/turna3.jpg', year: '2022' },
  { src: './images/turna1.jpg', year: '2024' },
  { src: './images/turna1.jpg', year: '2022' },
  { src: './images/turna1.jpg', year: '2024' },
  { src: './images/turna1.jpg', year: '2022' },
  // Add more images as needed
];

const Tournament = () => {
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

export default Tournament;
