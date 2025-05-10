// Services.jsx
import React, { forwardRef } from 'react';
import './Services.css';
import ServiceCard from './ServiceCard';

// Import all images
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/image 3.png';
import image4 from '../../assets/images/4.png';
import image5 from '../../assets/images/5.png';
import image6 from '../../assets/images/6.png';

// Добавляем forwardRef для поддержки ref
const Service = forwardRef((props, ref) => {
  const services = [
    {
      title: "СЕРЬЕЗНЫМИ ЖИЗНЕН-НЫМИ КРИЗИСАМИ",
      description: "ИЗМЕНА, ПОТЕРЯ РАБОТЫ, ФИНАНСОВЫЕ ПРОБЛЕМЫ, СЕРЬЕЗНЫЕ ЗАБОЛЕВАНИЯ, ОДИНОЧЕСТВО",
      isGreen: false,
      imageSrc: image1
    },
    {
      title: "СЕКСУАЛЬНЫМИ ПРОБЛЕМАМИ",
      description: "СЕКСУАЛЬНЫЕ ДИСФУНКЦИИ И ТРАВМЫ, ПРОБЛЕМЫ В ИНТИМНЫХ ОТНОШЕНИЯХ, СНИЖЕНИЕ ВЛЕЧЕНИЯ",
      isGreen: true,
      imageSrc: image2
    },
    {
      title: "РАДИКАЛЬНЫМИ ЖИЗ-НЕННЫМИ ПЕРЕМЕНАМИ",
      description: "ПЕРЕЕЗД В ДРУГУЮ СТРАНУ, СМЕНА РАБОТЫ, СВАДЬБА, РОЖДЕНИЕ РЕБЕНКА",
      isGreen: false,
      imageSrc: image3
    },
    {
      title: "ДЕТСКО-РОДИТЕЛЬСКИМИ КОНФЛИКТАМИ",
      description: "СЕПАРАЦИЯ, СЛОЖНОСТИ В ОТНОШЕНИЯХ С РОДИТЕЛЯМИ, ПРОБЛЕМЫ С ВОСПИТАНИЕМ, СЛОЖНОСТИ В ОБЩЕНИИ С ПОДРОСТКОМ",
      isGreen: true,
      imageSrc: image4
    },
    {
      title: "ТРЕВОЖНЫМИ И ДЕПРЕССИВНЫМИ СОСТОЯНИЯМИ",
      description: "НАВЯЗЧИВЫЕ МЫСЛИ, ФОБИИ, ПАНИЧЕСКИЕ АТАКИ",
      isGreen: false,
      imageSrc: image5
    },
    {
      title: "ПОТЕРЕЙ БЛИЗКОГО ЧЕЛОВЕКА",
      description: "СМЕРТЬ, РАЗВОД, РАЗРЫВ ОТНОШЕНИЙ",
      isGreen: true,
      imageSrc: image6
    },
  ];

  return (
    // Добавляем ref к корневому элементу
    <div ref={ref} id="services" className="service-container">
      <div className="service-content">
        <h1 className="service-heading">Я помогу Вам справится с:</h1>
        
        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              isGreen={service.isGreen}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Service;