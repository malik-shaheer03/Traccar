// MissionVisionValues.js
import React from 'react';
import './MissionVisionValues.css';
import missionIcon from './mission-icon.png'; // Import your icons
import visionIcon from './vision-icon.png';
import valuesIcon from './values-icon.png';

const MissionVisionValues = () => {
    const cardData = [
        {
          icon: missionIcon,
          title: 'Our Mission',
          description: 'Provide reliable, innovative, and efficient car tracking and security solutions.'
        },
        {
          icon: visionIcon,
          title: 'Our Vision',
          description: 'Become a global leader in advanced car tracking and security solutions by utilizing modern technology.'
        },
        {
          icon: valuesIcon,
          title: 'Our Values',
          description: 'Your Safety is our priority. Customer Service. Tech Innovations.'
        }
      ];
      
      const renderCards = () => {
        return cardData.map((card, index) => {
          const [firstWord, ...rest] = card.title.split(' ');
          return (
            <div key={index} className="mvv-card">
              <img src={card.icon} alt={card.title} className="mvv-icon" />
              <h3 className="mvv-title">
                <span className="mvv-title-highlight">{firstWord}</span> {rest.join(' ')}
              </h3>
              <p className="mvv-description">{card.description}</p>
            </div>
          );
        });
      };      

  return (
    <section className="mvv-section">
      <div className="mvv-container">
        {renderCards()}
      </div>
    </section>
  );
};

export default MissionVisionValues;