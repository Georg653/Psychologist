// AboutMe.jsx
import React, { useState, useEffect, forwardRef, useRef } from 'react';
import AboutMeCard from './AboutMeCard';
import './AboutMe.css';

// Импортируем иконки
import iconOne from '../../assets/images/tha.jpg';
import iconTwo from '../../assets/images/the2.jpg';
import iconThree from '../../assets/images/tha1.jpg';
import iconf from '../../assets/images/tha3.jpg';
import iconff from '../../assets/images/tha4.jpg';
import iconfff from '../../assets/images/tha5.jpg';


// Card data
const cardData = [
  {
    title: "ИНДИВИДУАЛЬНЫЙ ПОДХОД",
    text: "Я всегда работаю с каждым клиентом строго индивидуально, учитывая ваши уникальные личностные особенности, жизненную ситуацию и предпочтения. Вместе мы разработаем персональную программу, которая поможет вам максимально эффективно решить ваши проблемы",
    icon: iconOne,
    isGreen: true
  },
  {
    title: "ВЫСОКАЯ КВАЛИФИ-КАЦИЯ И ОПЫТ",
    text: "Я обладаю фундаментальными знаниями в области психологии, имею высшее профильное образование и значительный практический опыт работы с разными запросами клиентов. Это позволяет мне применять наиболее эффективные методики и подходы для достижения ваших целей. Раз в неделю провожу супервизию. Веду обучающие курсы и групповые тренинги.",
    icon: iconTwo,
    isGreen: false
  },
  {
    title: "АТМОСФЕРА ДОВЕРИЯ И БЕЗОПАСНОСТИ",
    text: "Для меня крайне важно создать комфортную и поддерживающую атмосферу на наших встречах. Я гарантирую полную конфиденциальность вашей работы и неукоснительное соблюдение профессиональной этики. Вы можете быть уверены, что ваши переживания будут услышаны и приняты с пониманием",
    icon: iconThree,
    isGreen: true
  },
  {
    title: "Фокус на реальных результатах",
    text: "Моя главная цель — помочь вам достичь тех изменений, которые вы для себя наметили. Я буду сопровождать вас на протяжении всего терапевтического процесса, регулярно оценивая динамику и внося коррективы. Мы будем двигаться последовательно к конкретным, ощутимым улучшениям в вашей жизни",
    icon: iconf,
    isGreen: false
  },
  {
    title: "ИНДИВИДУАЛЬНЫЙ ПОДХОД",
    text: "Я всегда работаю с каждым клиентом строго индивидуально, учитывая ваши уникальные личностные особенности, жизненную ситуацию и предпочтения. Вместе мы разработаем персональную программу, которая поможет вам максимально эффективно решить ваши проблемы",
     icon: iconff,
    isGreen: true
  },
  {
    title: "Удобство и гибкость",
    text: "Я работаю в центре города, что позволяет вам легко добраться ко мне после работы или в выходные дни. Также я предлагаю гибкий график приёма, чтобы вы могли подобрать время, максимально подходящее именно вам. Можем работать в онлайнформате, что также эффективно",
    icon: iconfff,
    isGreen: false
  }
];

// Изменяем компонент для поддержки ref
const AboutMe = forwardRef((props, ref) => {
  // Создаем расширенный массив данных для бесконечной прокрутки, добавляя клоны карточек
  const getExpandedCardData = () => {
    // Для создания эффекта бесконечной прокрутки мы дублируем карточки с обеих сторон
    // Это позволит нам плавно переходить от последней карточки к первой и наоборот
    return [...cardData, ...cardData, ...cardData];
  };
  
  const expandedCardData = getExpandedCardData();
  const originalLength = cardData.length;
  
  const [currentIndex, setCurrentIndex] = useState(originalLength); // Начинаем со второго набора карточек (первая копия)
  const [cardsToShow, setCardsToShow] = useState(3);
  const [slideStep, setSlideStep] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const sliderRef = useRef(null);
  const isTransitioning = useRef(false);
  
  // Новые переменные для настройки чувствительности свайпа
  const [swipeThreshold, setSwipeThreshold] = useState(100); // Порог для свайпа на мобильных
  const [dragSensitivity, setDragSensitivity] = useState(1); // Чувствительность перетаскивания

  // Adjust number of cards to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setCardsToShow(1);
        setSlideStep(1);
        setIsMobile(true);
        setSwipeThreshold(80); // Более высокий порог для маленьких экранов
        setDragSensitivity(0.5); // Пониженная чувствительность для маленьких экранов
      } else if (width < 768) {
        setCardsToShow(1);
        setSlideStep(1);
        setIsMobile(true);
        setSwipeThreshold(100); // Стандартный порог для средних мобильных экранов
        setDragSensitivity(0.7); // Средняя чувствительность
      } else if (width < 1024) {
        setCardsToShow(2);
        setSlideStep(2);
        setIsMobile(false);
        setSwipeThreshold(70);
        setDragSensitivity(0.8);
      } else {
        setCardsToShow(3);
        setSlideStep(3);
        setIsMobile(false);
        setSwipeThreshold(50);
        setDragSensitivity(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Эффект для обработки перемещения к центральной группе карточек после достижения границ
  useEffect(() => {
    if (currentIndex < originalLength || currentIndex >= originalLength * 2) {
      const timeoutId = setTimeout(() => {
        // Временно отключаем анимацию для мгновенного перехода
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none';
          isTransitioning.current = true;
        }
        
        // Нормализуем индекс, перемещаясь к центральной копии карточек
        const normalizedIndex = currentIndex % originalLength + originalLength;
        setCurrentIndex(normalizedIndex);
        
        // Восстанавливаем анимацию после небольшой задержки
        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.style.transition = 'transform 0.3s ease';
            isTransitioning.current = false;
          }
        }, 50);
      }, 300); // Задержка должна быть равна или больше длительности анимации перехода
      
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, originalLength]);

  const nextSlide = () => {
    if (isTransitioning.current) return;
    
    if (isMobile) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(currentIndex + slideStep);
    }
  };

  const prevSlide = () => {
    if (isTransitioning.current) return;
    
    if (isMobile) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(currentIndex - slideStep);
    }
  };

  // Функция для определения активного индикатора
  const isActiveDot = (dotIndex) => {
    // Получаем текущий нормализованный индекс (относительно оригинального массива)
    const normalizedCurrentIndex = currentIndex % originalLength;
    
    if (isMobile) {
      return normalizedCurrentIndex === dotIndex;
    } else {
      const groupIndex = Math.floor(normalizedCurrentIndex / slideStep) % Math.ceil(originalLength / slideStep);
      return groupIndex === dotIndex;
    }
  };

  // Функция для перехода на нужную группу карточек по клику на индикатор
  const goToDotSlide = (dotIndex) => {
    if (isTransitioning.current) return;
    
    if (isMobile) {
      setCurrentIndex(dotIndex + originalLength);
    } else {
      setCurrentIndex(dotIndex * slideStep + originalLength);
    }
  };

  // Обработчики для свободного скроллинга на мобильных устройствах
  const handleMouseDown = (e) => {
    if (isTransitioning.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX);
    setDragDistance(0);
  };

  const handleMouseUp = () => {
    if (!isDragging || isTransitioning.current) return;
    
    if (Math.abs(dragDistance) > swipeThreshold) {
      if (dragDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setIsDragging(false);
    
    // Возвращаем слайдер в правильное положение
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * (100 / cardsToShow)}%)`;
      sliderRef.current.style.transition = 'transform 0.3s ease';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isTransitioning.current) return;
    
    const currentX = e.pageX;
    const distance = currentX - startX;
    setDragDistance(distance);
    
    if (sliderRef.current) {
      // Применяем уменьшенную чувствительность при перетаскивании
      const translateValue = -currentIndex * (100 / cardsToShow) + (distance * dragSensitivity / sliderRef.current.clientWidth * 100);
      sliderRef.current.style.transform = `translateX(${translateValue}%)`;
      sliderRef.current.style.transition = 'none'; // Убираем анимацию при перетаскивании
    }
  };

  const handleTouchStart = (e) => {
    if (isTransitioning.current) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setDragDistance(0);
    
    // Отключаем плавность при начале касания
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none';
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging || isTransitioning.current) return;
    
    // Увеличенный порог для мобильных устройств
    if (Math.abs(dragDistance) > swipeThreshold) {
      if (dragDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setIsDragging(false);
    
    // Возвращаем исходное положение после прекращения перетаскивания с плавной анимацией
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.3s ease';
      sliderRef.current.style.transform = `translateX(-${currentIndex * (100 / cardsToShow)}%)`;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || isTransitioning.current) return;
    
    // Предотвращаем переход страницы при свайпе
    e.preventDefault();
    
    const currentX = e.touches[0].pageX;
    const distance = currentX - startX;
    setDragDistance(distance);
    
    if (sliderRef.current) {
      // Применяем уменьшенную чувствительность при перетаскивании
      const translateValue = -currentIndex * (100 / cardsToShow) + (distance * dragSensitivity / sliderRef.current.clientWidth * 100);
      sliderRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  };

  // Функция для создания правильного количества индикаторов
  const getDotsToShow = () => {
    if (isMobile) {
      // На мобильных - точка для каждой карточки
      return Array.from({ length: originalLength });
    } else {
      // На десктопе - точки для каждой группы карточек
      const dotsCount = Math.ceil(originalLength / slideStep);
      return Array.from({ length: dotsCount });
    }
  };

  return (
    <section ref={ref} id="about-me" className="about-me-section">
      <h2 className="about-me-title">Почему Я?</h2>
      
      <div className="about-me-carousel">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          &lt;
        </button>
        
        <div 
          className="about-me-cards-container"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          <div 
            className="about-me-cards" 
            ref={sliderRef}
            style={{ 
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease'
            }}
          >
            {expandedCardData.map((card, index) => {
              // Вычисляем оригинальный индекс карточки (от 1 до originalLength)
              const originalIndex = (index % originalLength) + 1;
              
              return (
                <AboutMeCard
                  key={index}
                  title={card.title}
                  text={card.text}
                  icon={card.icon}
                  isGreen={card.isGreen}
                  cardNumber={originalIndex}
                />
              );
            })}
          </div>
        </div>
        
        <button className="carousel-btn next-btn" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      
      <div className="carousel-dots">
        {getDotsToShow().map((_, index) => (
          <span 
            key={index} 
            className={`dot ${isActiveDot(index) ? 'active' : ''}`}
            onClick={() => goToDotSlide(index)}
          />
        ))}
      </div>
    </section>
  );
});

export default AboutMe;