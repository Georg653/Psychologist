// FAQ.jsx
import React, { forwardRef } from 'react';
import './FAQ.css';
import consultationImage1 from '../../assets/images/0B8A0048_1.png';
import psychologistImage1 from '../../assets/images/0B8A0288.jpg';

// Изменяем компонент для поддержки ref
const FAQ = forwardRef((props, ref) => {
  return (
    // Добавляем ref к корневому элементу компонента
    <div ref={ref} id="faq" className="faq-container">
      <div className="background-line"></div>
      
      <div className="faq-content-wrapper">
        <h1 className="faq-heading">Ответы на самые распространенные вопросы</h1>
        
        <div className="faq-grid">
          {/* First column */}
          <div className="grid-item item-image1">
            <img src={consultationImage1} alt="Консультация" className="consultation-image1" />
          </div>
          
          {/* Second column */}
          <div className="grid-item item-signup">
            <div className="text-card">
              <h2>ОЖИДАЕМЫЕ РЕЗУЛЬТАТЫ И СРОКИ</h2>
              <p>Вся информация о вас будет строго конфиденциальной</p>
              <p>Строго соблюдаю профессиональный кодекс этики психологов</p>
            </div>
          </div>
          
          <div className="grid-item item-process">
            <div className="text-card">
              <h2>ОСОБЕННОСТИ ТЕРАПЕВТИЧЕСКОГО ПРОЦЕССА</h2>
              <p>Наша встреча займет около <strong>60 минут</strong>. Для пары время увеличится до <strong>120 мин</strong>.</p>
              <p>Рекомендую приходить <strong>1 раз в неделю</strong> на первоначальном этапе</p>
            </div>
          </div>
          
          <div className="grid-item item-location">
            <div className="text-card">
              <h2>ГДЕ ПРОХОДЯТ ВСТРЕЧИ</h2>
              <p>Очно — в кабинете, в Минске (рядом с метро)</p>
              <p>Онлайн — в любом мессенджере с видеосвязью</p>
            </div>
          </div>
          
          <div className="grid-item item-confidentiality">
            <div className="text-card">
              <h2>КОНФИДЕНЦИАЛЬНОСТЬ И ЭТИКА</h2>
              <p>Вся информация о вас будет строго конфиденциальной</p>
              <p>Строго соблюдаю профессиональный кодекс этики психологов</p>
            </div>
          </div>
          
          <div className="grid-item item-results">
          <div className="text-card">
              <h2>КАК ЗАПИСАТЬСЯ</h2>
              <p>Написать мне в любом мессенджере и мы подберем удобное время для консультации</p>
            </div>
            
          </div>

          <div className="grid-item item-image2">
            <img src={psychologistImage1} alt="Психолог" className="psychologist-image1" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default FAQ;