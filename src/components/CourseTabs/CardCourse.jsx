import React from 'react';
import './CardCourse.css';

const CardCourse = ({ data }) => {
  const { title, instructor, rating, students, reviews, isPremium } = data;

  return (
    <div className="course-card">
      <h3 className="course-title">{title}</h3>
      <p className="instructor-name">{instructor}</p>
      <p className="student-count">{students} students</p>
      
      <div className="rating-row">
        <span className="rating-num">{rating}</span>
        <span className="stars">★★★★★</span>
        <span className="review-count">({reviews})</span>
      </div>
      
      {isPremium && (
        <span className="premium-badge">
          <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style={{marginRight: '4px'}}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          </svg>
          Premium
        </span>
      )}
    </div>
  );
};

export default CardCourse;