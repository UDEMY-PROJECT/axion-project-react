import React from 'react';
import './Hero.css';

const TopBanner = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        <div className="hero-text-content">
          <span className="breadcrumb">Personal Plan</span>
          <h1>Take your career to the next level</h1>
          <p>Get unlimited access to 11,000+ top-rated courses in tech, business, and more.</p>
          <button className="cta-button">Start subscription</button>
          <p className="terms-text">Starting at ₹850 per month. Cancel anytime.</p>
        </div>

        <div className="hero-image-container">
          {/* Using the actual Udemy image URL here */}
          <img 
            src="https://s.udemycdn.com/consumer-subscription/billboard/desktop-v5.png" 
            alt="Student looking up" 
            className="hero-image-actual"
          />
        </div>

      </div>
    </section>
  );
};

export default TopBanner;