import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, isGreen, imageSrc }) => {
  return (
    <div className={`service-card ${isGreen ? 'green' : 'gray'}`}>
      <div className="texture-overlay"></div>
      <div className="card-content1">
        <h3 className="card-title1">{title}</h3>
        <div className="card-image">
          <img src={imageSrc} alt={title} />
        </div>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;