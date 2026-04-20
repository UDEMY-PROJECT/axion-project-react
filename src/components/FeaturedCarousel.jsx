import React, { useState } from 'react';
import mockCourses from './mockCourses.json';

const FeaturedCarousel = () => {
  // NEW: State to remember which tab is clicked
  const [activeTab, setActiveTab] = useState('Most popular');

  // Create a fresh copy of the courses array so we can sort it safely
  let displayCourses = [...mockCourses];

  // NEW: Sort logic based on the active tab
  if (activeTab === 'Most popular') {
    // Sort by highest number of reviews
    displayCourses.sort((a, b) => b.reviews - a.reviews);
  } else if (activeTab === 'Trending') {
    // Sort by highest star rating
    displayCourses.sort((a, b) => b.rating - a.rating);
  }

  // Grab only the top 4 courses for the horizontal row
  const carouselCourses = displayCourses.slice(0, 4);

  return (
    <div>
      {/* The Interactive Tabs */}
      <div style={{ borderBottom: '1px solid #d1d7dc', display: 'flex', gap: '24px', fontWeight: 'bold', color: '#6a6f73', marginBottom: '24px' }}>
        <span 
          onClick={() => setActiveTab('Most popular')}
          style={{ 
            color: activeTab === 'Most popular' ? '#1c1d1f' : '#6a6f73', 
            borderBottom: activeTab === 'Most popular' ? '2px solid #1c1d1f' : 'none', 
            paddingBottom: '8px', 
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Most popular
        </span>
        
        <span 
          onClick={() => setActiveTab('Trending')}
          style={{ 
            color: activeTab === 'Trending' ? '#1c1d1f' : '#6a6f73', 
            borderBottom: activeTab === 'Trending' ? '2px solid #1c1d1f' : 'none', 
            paddingBottom: '8px', 
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Trending
        </span>
      </div>

      {/* The Row of Cards */}
      <div className="carousel-container">
        {carouselCourses.map((course, index) => (
          <div key={index} className="carousel-card">
            <img src={course.thumbnail} alt={course.title} className="carousel-image" />
            <h3 className="carousel-title">{course.title}</h3>
            <p className="course-instructor">{course.instructor}</p>
            
            <div className="course-stats">
              <span style={{color: '#b4690e', fontWeight: 'bold'}}>{course.rating}</span>
              <span style={{color: '#b4690e', marginLeft: '4px'}}>⭐⭐⭐⭐⭐</span>
              <span style={{color: '#6a6f73'}}> ({course.reviews.toLocaleString()})</span>
            </div>
            
            <div className="course-price" style={{ textAlign: 'left', marginTop: '4px', fontWeight: 'bold' }}>
              ₹{course.price}
            </div>
            
            {course.isBestseller && (
              <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                <span className="bestseller-badge">Bestseller</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;