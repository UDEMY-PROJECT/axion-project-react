import React from 'react';
import './Features.css';

// A reusable mini-component for the individual rows
const FeatureRow = ({ label, title, description, image, isReversed }) => (
  <div className={`feature-row ${isReversed ? 'reversed' : ''}`}>
    <div className="feature-text">
      <span className="feature-label">{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div className="feature-image">
      <img src={image} alt={title} />
    </div>
  </div>
);

const Features = () => {
  // Array holding the data for the three sections
  const featureData = [
    {
      label: "Current",
      title: "Cutting-edge skills to keep you sharp",
      description: "Learn confidently with up-to-date courses covering in-demand topics like AI for any role, cloud computing certifications, web development, productivity, leadership, design, digital marketing, and more.",
      image: "https://s.udemycdn.com/consumer-subscription/pillars/pillars-1-desktop-2x-v2.jpg",
      isReversed: false // Image on the Right
    },
    {
      label: "Flexible",
      title: "Freedom to explore and discover",
      description: "Test drive a new subject, switch between courses, or pick and choose the lessons that best fit your needs. Personal Plan gives you the power to control what and how you learn.",
      image: "https://s.udemycdn.com/consumer-subscription/pillars/pillars-2-desktop-2x-v2.jpg",
      isReversed: true // Image on the Left
    },
    {
      label: "Effective",
      title: "Learning designed to help you start doing",
      description: "Gain knowledge through practice with AI Role Play simulations, labs, coding exercises, and certification exam practice tests. Once you finish a course, strut your new skills with a certificate of completion.",
      image: "https://s.udemycdn.com/consumer-subscription/pillars/pillars-3-desktop-2x-v2.jpg",
      isReversed: false // Image on the Right
    }
  ];

  return (
    <section className="features-container">
      {featureData.map((feature, index) => (
        <FeatureRow key={index} {...feature} />
      ))}
    </section>
  );
};

export default Features;