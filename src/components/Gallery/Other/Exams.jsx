import React from 'react';
import './Exams.css';

const images = [
  { src: './images/jee1.jpg', year: '2024' },
  { src: './images/jee2.jpg', year: '2022' },
  { src: './images/neet2.jpg', year: '2024' },
  { src: './images/neet2.jpg', year: '2022' },
  { src: './images/jee1.jpg', year: '2024' },
  { src: './images/jee2.jpg', year: '2022' },
  { src: './images/neet2.jpg', year: '2024' },
  { src: './images/neet2.jpg', year: '2022' },
  // Add more images as needed
];

const Exams = () => {
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

export default Exams;
