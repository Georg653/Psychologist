import React from 'react';
import './Footer.css';
// Import icons - you'll need to adjust these paths based on your project structure
import telegramIcon from '../../assets/icons/telegram2.jpg';
import whatsappIcon from '../../assets/icons/whatsapp2.jpg';
import viberIcon from '../../assets/icons/viber2.jpg';

const Footer = ({ scrollToSection }) => {
  // Простой обработчик для кнопок навигации
  const handleButtonClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="tg://resolve?domain=kurillenko_psy" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" />
          </a>
          <a href="whatsapp://send?phone=375295457858&text=" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="viber://chat?number=%2B375295457858" target="_blank" rel="noopener noreferrer">
            <img src={viberIcon} alt="Viber" />
          </a>
        </div>
        
        <nav className="footer-nav">
          <button onClick={() => handleButtonClick('services')} className="footer-nav-item">УСЛУГИ</button>
          <button onClick={() => handleButtonClick('faq')} className="footer-nav-item">ВОПРОСЫ</button>
          <button onClick={() => handleButtonClick('about-me')} className="footer-nav-item">ПОЧЕМУ Я</button>
          <button onClick={() => handleButtonClick('pricing')} className="footer-nav-item">ЦЕНА</button>
          <button onClick={() => handleButtonClick('testimonials')} className="footer-nav-item">ОТЗЫВЫ</button>
        </nav>
        
        <div className="footer-info">
          <p>ПСИХОЛОГ: КУРИЛЕНКО АНАСТАСИЯ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;