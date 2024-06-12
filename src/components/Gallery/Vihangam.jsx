import React from 'react';
import './Vihangam.css';

const images = [
  { src: './images/vihangam/v1.jpg', year: '2023' },
  { src: './images/vihangam/v2.jpg', year: '2022' },
  { src: './images/vihangam/v1.jpg', year: '2023' },
  { src: './images/vihangam/v2.jpg', year: '2022' },
  { src: './images/vihangam/v1.jpg', year: '2023' },
  { src: './images/vihangam/v2.jpg', year: '2022' },
  { src: './images/vihangam/v1.jpg', year: '2023' },
  { src: './images/vihangam/v2.jpg', year: '2022' },
  // Add more images as needed
];

const Vihangam = () => {
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

export default Vihangam;
