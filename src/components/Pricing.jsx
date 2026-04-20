import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section">
      <h2>Choose a plan that works for you</h2>
      
      <div className="pricing-cards-wrapper">
        {/* Highlighted Card */}
        <div className="price-card highlighted">
          <div className="card-top">
            <span className="badge">Best value</span>
            <h3>Personal Plan</h3>
            <p className="subtitle">Streamline your career goals</p>
          </div>
          <div className="card-bottom">
            <p className="price-text">Starting at ₹850 per month</p>
            <p className="sub-text">Billed monthly or annually. Cancel anytime.</p>
            <ul className="perks">
              <li>✓ 11,000+ top-rated courses</li>
              <li>✓ Professional certification prep</li>
              <li>✓ 8,000+ practice exercises</li>
            </ul>
            <button className="btn-purple">Start subscription</button>
          </div>
        </div>

        {/* Standard Card */}
        <div className="price-card standard">
          <div className="card-top">
            <h3>Buy individual courses</h3>
            <p className="subtitle">Learn anything</p>
          </div>
          <div className="card-bottom">
            <p className="price-text">₹499 - ₹3,499</p>
            <p className="sub-text">One time purchase</p>
            <ul className="perks">
              <li>✓ 250,000+ professional and personal courses</li>
              <li>✓ Lifetime access</li>
              <li>✓ Pay as you go</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;