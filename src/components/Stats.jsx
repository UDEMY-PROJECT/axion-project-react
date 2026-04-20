import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <div className="stats-wrapper">
      <section className="stats-container">
        <div className="stat-box">
          <h2>28,000+</h2>
          <p>on-demand courses</p>
        </div>
        <div className="stat-box">
          <h2>20,000+</h2>
          <p>practice exercises</p>
        </div>
        <div className="stat-box">
          <h2>4.5 <span className="star">★</span></h2>
          <p>average course rating</p>
        </div>
        <div className="stat-box">
          <h2>9,000+</h2>
          <p>top instructors</p>
        </div>
      </section>
    </div>
  );
};

export default Stats;