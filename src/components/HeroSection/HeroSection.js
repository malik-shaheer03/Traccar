import React from 'react';
import './HeroSection.css';
import circleIcon from './circle-icon.png'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Car Tracking &<br />Security System</h1>
        <p>Vehicle tracking, security and diagnostic solutions are available if required, with user-friendly software.</p>
        <button className="get-started" onClick={handleGetStarted}>
          <img src={circleIcon} alt="Circle Icon" className="circle-icon" />
          GET STARTED
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
