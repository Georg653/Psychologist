// Hero.jsx
import React from 'react';
import './Hero.css';
// Import images with correct paths
import psychologistPhoto from '../../assets/images/psychologist-photo.jpg';
import lineImage from '../../assets/images/lein.jpg';
import telegramIcon from '../../assets/icons/telegram.jpg';
import viberIcon from '../../assets/icons/viber.jpg';
import whatsappIcon from '../../assets/icons/whatsapp.jpg';
// Импорт изображений листвы
import foliageTop from '../../assets/images/listva-1.jpg';
import foliageSide from '../../assets/images/pngeg-0.png';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Background rounded rectangle */}
      <div className="hero-background">
        {/* Добавленная листва */}
        <div className="foliage-top">
          <img src={foliageTop} alt="Декоративная листва" />
        </div>
        
        <div className="foliage-side">
          <img src={foliageSide} alt="Декоративная листва" />
        </div>
        
        {/* Simplified layout */}
        <div className="content-container">
          {/* Line image spanning across the width */}
          <div className="line-image">
            <img src={lineImage} alt="Decorative line" />
          </div>
          
          {/* Psychologist image positioned left */}
          <div className="psychologist-image">
            <img src={psychologistPhoto} alt="Психолог Анастасия" />
          </div>
          
          {/* Text content */}
          <div className="text-content">
            {/* Large greeting text on left side */}
            <h1 className="greeting-text">Здравствуйте,</h1>
            
            {/* Friends text on right side */}
            <h2 className="friends-text">дорогие друзья!</h2>
            
            {/* Introduction text on right side */}
            <p className="intro-text">
              МЕНЯ ЗОВУТ АНАСТАСИЯ, И Я РАДА ПРИВЕТСТВОВАТЬ КАЖДОГО
              НА СВОЕЙ СТРАНИЧКЕ! КАК ПРАКТИКУЮЩИЙ ПСИХОЛОГ, Я
              ЗНАЮ, ЧТО КАЖДЫЙ ИЗ НАС ЗАСЛУЖИВАЕТ ПОДДЕРЖКИ,
              ОСОБЕННО КОГДА ЖИЗНЬ ПОДКИДЫВАЕТ НАМ СВОИ СЮРПРИЗЫ.
            </p>
            
            {/* Social media buttons on right side */}
            <div className="social-buttons">
              <a href="tg://resolve?domain=kurillenko_psy" className="social-button">
                <img src={telegramIcon} alt="Telegram" />
                <span>TELEGRAM</span>
              </a>
              <a href="viber://chat?number=%2B375295457858" className="social-button">
                <img src={viberIcon} alt="Viber" />
                <span>VIBER</span>
              </a>
              <a href="whatsapp://send?phone=375295457858&text=" className="social-button">
                <img src={whatsappIcon} alt="WhatsApp" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;