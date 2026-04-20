import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <span>{question}</span>
        <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="faq-container">
      <h2>Frequently asked questions</h2>
      <FAQItem 
        question="What is Personal Plan?" 
        answer="Personal Plan is a monthly subscription that gives you access to a curated collection of 11,000+ top courses." 
      />
      <FAQItem 
        question="How can I cancel my subscription?" 
        answer="If you decide the subscription isn't the right fit for you, you can manage or cancel your subscription at any time in your account settings." 
      />
      <FAQItem 
        question="Are all Udemy courses included in Personal Plan?" 
        answer="No. The courses in Personal Plan are our highest-rated courses in tech, business, and personal development, curated specifically to help you advance in your career." 
      />
    </section>
  );
};

export default FAQ;