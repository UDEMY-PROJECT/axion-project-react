import React, { useState, useEffect } from 'react';
import './StickyNavbar.css';

const StickyNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 400 is the number of pixels the user scrolls before the bar pops in.
      // You can adjust this number so it appears exactly when your teammate's navbar hides.
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to prevent memory leaks
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-nav-wrapper ${isVisible ? 'visible' : ''}`}>
      <div className="sticky-nav-container">
        
        <div className="sticky-left">
          {/* Using a text approximation for the logo until you drop an SVG in */}
          <span className="udemy-logo-text">ûdemy</span>
          <span className="plan-title">Personal Plan</span>
        </div>

        <div className="sticky-right">
          <span className="sticky-price-text">Starting at ₹500 per month. Cancel anytime.</span>
          <button className="sticky-btn">Start subscription</button>
        </div>

      </div>
    </div>
  );
};

export default StickyNavbar;