// Testimonials.jsx
import React, { forwardRef } from 'react';
import './Testimonials.css';
import coment1 from '../../assets/images/coment1.png';
import coment2 from '../../assets/images/coment2.png';
import coment3 from '../../assets/images/coment3.png';
import coment4 from '../../assets/images/coment4.png';
import backgroundLine from '../../assets/images/Vector0000.png';

// Добавляем forwardRef для поддержки ref
// Заменил имя компонента с ContactForm на Testimonials для соответствия имени файла
const Testimonials = forwardRef((props, ref) => {
  return (
    // Добавляем ref к корневому элементу
    <div ref={ref} id="testimonials" className="testimonials-container">
      <div className="background-line">
        <img src={backgroundLine} alt="Decorative line" />
      </div>
      
      <h1 className="testimonials-title">Отзывы</h1>
      
      <div className="testimonials-scattered">
        <div className="testimonial-card card1">
          <img src={coment1} alt="Отзыв 1" className="testimonial-image" />
          <div className="dot red"></div>
        </div>
        
        <div className="testimonial-card card2">
          <img src={coment3} alt="Отзыв 2" className="testimonial-image" />
          <div className="dot green"></div>
        </div>
        
        <div className="testimonial-card card3">
          <img src={coment2} alt="Отзыв 3" className="testimonial-image" />
          <div className="dot orange"></div>
        </div>
        
        <div className="testimonial-card card4">
          <img src={coment4} alt="Отзыв 4" className="testimonial-image" />
          <div className="dot blue"></div>
        </div>
      </div>
    </div>
  );
});

export default Testimonials;