import React from 'react';
import './Lab.css';

const images = [
  { src: './images/lab4.jpg', year: '2024' },
  { src: './images/lab2.jpg', year: '2022' },
  { src: './images/lab5.jpg', year: '2024' },
  { src: './images/lab2.jpg', year: '2022' },
  { src: './images/lab6.jpg', year: '2024' },
  { src: './images/lab2.jpg', year: '2022' },
  { src: './images/lab2.jpg', year: '2024' },
  { src: './images/lab2.jpg', year: '2022' },
  // Add more images as needed
];

const lab = () => {
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

export default lab;
