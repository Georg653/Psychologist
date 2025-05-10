// Pricing.jsx
import React, { forwardRef } from 'react';
import './Pricing.css';
import greenBg from '../../assets/images/dqqd.png';
import listva from '../../assets/images/listva2.jpg';
import textura from '../../assets/images/textyra2.png';

// Добавляем forwardRef для поддержки ref
const Pricing = forwardRef((props, ref) => {
  return (
    // Добавляем ref к корневому элементу
    <div ref={ref} id="pricing" className="pricing-container">
      <div className="pricing-card-wrapper">
        {/* Зеленый фон */}
        <div className="green-background">
          <img src={greenBg} alt="background" />
        </div>
        
        {/* Листья поверх всего */}
        <div className="leaves-decoration leaves-right"></div>
        <div className="leaves-decoration leaves-left"></div>
        
        {/* Белый прямоугольник с контентом */}
        <div className="pricing-card">
          <div className="texture-overlay" style={{ backgroundImage: `url(${textura})` }}></div>
          <div className="price-content">
            <h1 className="price-title">Стоимость услуг</h1>
            <div className="price-item">
              <p className="price-description">Стоимость одного сеанса</p>
              <p className="price-value">3000₽</p>
            </div>
            <div className="price-item">
              <p className="price-description">Стоимость семейной сессии</p>
              <p className="price-value">6000₽</p>
            </div>
            <div className="price-discount">
              <p>Возможна предоплата за блок из 4 консультаций со скидкой 10%.</p>
            </div>
            <div className="payment-methods">
              <p>Принимаю оплату наличными, картами</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Pricing;