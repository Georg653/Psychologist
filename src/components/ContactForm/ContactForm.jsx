import React, { useState } from 'react';
import './ContactForm.css';
// Предполагается, что изображение с листиками находится в указанной директории
import leafImage from '../../assets/images/list123.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы на сервер
    console.log('Form submitted:', formData);
    // Сброс формы после отправки
    setFormData({
      name: '',
      email: '',
      problem: ''
    });
    // Можно добавить уведомление об успешной отправке
    alert('Заявка успешно отправлена!');
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        <h1 className="form-title">Оставить заявку</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Имя:*</label>
            <input 
              type="text" 
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Почта:*</label>
            <input 
              type="email" 
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Тут вы можете кратко поделиться своей проблемой:</label>
            <textarea 
              className="form-control form-textarea"
              name="problem"
              value={formData.problem}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <button type="submit" className="btn-submit">Отправить</button>
        </form>
        
        {/* Leaf decorations */}
        <img src={leafImage} alt="Leaf decoration" className="leaf-left" />
        <img src={leafImage} alt="Leaf decoration" className="leaf-right" />
      </div>
    </div>
  );
};

export default ContactForm;