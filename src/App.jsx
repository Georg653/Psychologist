import React, { useRef } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import FAQ from './components/FAQ/FAQ';
import AboutMe from './components/AboutMe/AboutMe';
import Pricing from './components/Pricing/Pricing';
import ContactForm from './components/ContactForm/ContactForm';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  // Создаем ref для каждой секции
  const servicesRef = useRef(null);
  const faqRef = useRef(null);
  const aboutMeRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  // Функция для плавной прокрутки к секции
  const scrollToSection = (sectionId) => {
    let ref = null;
    
    switch(sectionId) {
      case 'services':
        ref = servicesRef;
        break;
      case 'faq':
        ref = faqRef;
        break;
      case 'about-me':
        ref = aboutMeRef;
        break;
      case 'pricing':
        ref = pricingRef;
        break;
      case 'testimonials':
        ref = testimonialsRef;
        break;
      case 'contact':
        ref = contactRef;
        break;
      default:
        break;
    }
    
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Header scrollToSection={scrollToSection} />
      <main>
        <Hero />
        <Services ref={servicesRef} />
        <FAQ ref={faqRef} />
        <AboutMe ref={aboutMeRef} />
        <Pricing ref={pricingRef} />
        <Testimonials ref={testimonialsRef} />
        <ContactForm ref={contactRef} />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App; 