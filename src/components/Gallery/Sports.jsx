import React from 'react';
import './Sports.css';

const images = [
  { src: './images/vihangam/s1.jpg', year: '2023' },
  { src: './images/vihangam/s2.jpg', year: '2022' },
  { src: './images/vihangam/s1.jpg', year: '2023' },
  { src: './images/vihangam/s3.jpg', year: '2022' },
  { src: './images/vihangam/s1.jpg', year: '2023' },
  { src: './images/vihangam/s3.jpg', year: '2022' },
  { src: './images/vihangam/s1.jpg', year: '2023' },
  { src: './images/vihangam/s3.jpg', year: '2022' },
  // Add more images as needed
];

const Sports = () => {
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

export default Sports;
