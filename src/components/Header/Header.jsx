import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Предотвращаем прокрутку при открытом меню
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);
  
  // Используем тот же обработчик, что и в футере
  const handleButtonClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false); // Закрываем меню при клике на ссылку
  };

  // Переключение состояния меню
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>КУРИЛЕНКО АНАСТАСИЯ</h1>
        </div>
        
        {/* Бургер-кнопка */}
        <div 
          className={`burger-menu ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>

        {/* Навигация */}
        <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><button onClick={() => handleButtonClick('services')}>УСЛУГИ</button></li>
            <li><button onClick={() => handleButtonClick('faq')}>ВОПРОСЫ</button></li>
            <li><button onClick={() => handleButtonClick('about-me')}>ПОЧЕМУ Я</button></li>
            <li><button onClick={() => handleButtonClick('pricing')}>ЦЕНА</button></li>
            <li><button onClick={() => handleButtonClick('testimonials')}>ОТЗЫВЫ</button></li>
          </ul>
        </nav>
        
        {/* Кнопка телеграм */}
        <div className="telegram-button">
          <a href="tg://resolve?domain=kurilenkopsybot" className="telegram-link" target="_blank" rel="noopener noreferrer">
            <span className="telegram-icon"></span>
            <span>TELEGRAM BOT</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;