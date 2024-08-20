import React from 'react';
import './Acedmic.css';

const images = [
  { src: './images/acedmik1.jpg', year: '2024' },
  { src: './images/acedmik2.jpg', year: '2022' },
  { src: './images/acedmik4.jpg', year: '2024' },
  { src: './images/acedmik4.jpg', year: '2022' },
  { src: './images/acedmik5.jpg', year: '2024' },
  { src: './images/acedmik2.jpg', year: '2022' },
  { src: './images/acedmik1.jpg', year: '2024' },
  { src: './images/acedmik2.jpg', year: '2022' },
  // Add more images as needed
];

const Acedmic = () => {
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

export default Acedmic;
