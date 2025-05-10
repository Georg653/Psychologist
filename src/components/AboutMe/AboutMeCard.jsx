import React from 'react';
import './AboutMeCard.css';

const AboutMeCard = ({ title, text, icon, isGreen, cardNumber }) => {
  return (
    <div className={`about-me-card ${isGreen ? 'green-card' : 'white-card'}`}>
      {isGreen ? (
        <>
          <div className="card-icon top-icon">
            <img src={icon} alt="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
          </div>
          <div className="card-number">{cardNumber}</div>
        </>
      ) : (
        <>
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
          </div>
          <div className="card-icon bottom-icon">
            <img src={icon} alt="icon" />
          </div>
          <div className="card-number">{cardNumber}</div>
        </>
      )}
    </div>
  );
};

export default AboutMeCard;