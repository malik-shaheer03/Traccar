import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    rating: 5,
    message: 'Exceptional Service! Our experience with Estatein was outstanding. Highly recommended!',
    name: 'Wade Warren',
    location: 'UAE, Abu Dhabi',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    rating: 5,
    message: 'Amazing experience! Estatein helped us sell our property quickly for a great price.',
    name: 'Jenny Wilson',
    location: 'USA, New York',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    rating: 4,
    message: 'Highly professional and responsive team. They made the process smooth and stress-free.',
    name: 'Robert Fox',
    location: 'UK, London',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    rating: 5,
    message: 'Estatein provided exceptional service from start to finish. Couldn\'t be happier with their support!',
    name: 'Jack Hammer',
    location: 'USA, California',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  const handlePrev = () => {
    setFadeClass('fade-out');

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 2 + testimonialsData.length) % testimonialsData.length);
      setFadeClass('fade-in');
    }, 500); // Matches animation duration
  };

  const handleNext = () => {
    setFadeClass('fade-out');

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonialsData.length);
      setFadeClass('fade-in');
    }, 500);
  };

  return (
    <div className="testimonials">
      <h2 className="testimonials-title">
        <span className="highlight" style={{ color: 'white' }}>Customer</span> <span className="highlight-alt">Testimonials</span>
      </h2>
      <div className="testimonial-container">
        <button className="nav-button prev-button" onClick={handlePrev}>&#8249;</button>
        <div className={`testimonials-wrapper ${fadeClass}`}>
          {testimonialsData.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <div className="rating">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i}>&#11088;</span>
                ))}
              </div>
              <p className="message">{testimonial.message}</p>
              <div className="user-info">
                <img src={testimonial.image} alt={testimonial.name} className="user-image" />
                <div className="user-details">
                  <p className="user-name">{testimonial.name}</p>
                  <p className="user-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button next-button" onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
};

export default Testimonials;
