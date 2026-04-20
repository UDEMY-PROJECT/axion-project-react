import React, { useState } from 'react';

const WebDevCourses = ({ course }) => {
  // State to track if the mouse is hovering over this specific card
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="course-card" 
      // Event listeners to flip the hover state on and off
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // We set position relative here so the absolute popup knows where to anchor itself!
      style={{ position: 'relative', zIndex: isHovered ? 10 : 1 }}
    >
      <img src={course.thumbnail} alt={course.title} className="course-image" />
      
      <div className="course-info">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description" style={{ fontSize: '14px', marginBottom: '4px' }}>
          {course.description}
        </p>
        <p className="course-instructor">{course.instructor}</p>
        
        <div className="course-stats">
          <span style={{color: '#b4690e', fontWeight: 'bold', fontSize: '14px'}}>{course.rating}</span>
          <span style={{color: '#b4690e', marginLeft: '4px'}}>⭐⭐⭐⭐⭐</span>
          <span style={{color: '#6a6f73'}}> ({course.reviews.toLocaleString()})</span>
          <span style={{color: '#6a6f73', marginLeft: '8px'}}>• {course.totalHours} total hours • {course.lectures} lectures • {course.level}</span>
        </div>
        
        {/* Badges with rounded corners and SVG icons */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <span style={{ backgroundColor: '#5624d0', color: 'white', padding: '4px 8px', fontSize: '12px', fontWeight: 'bold', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            {/* The Rosette/Checkmark Verified Icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 5.09 19.5 4.5 20.09 8.91 23.18 12 20.09 15.09 19.5 19.5 15.09 18.91 12 22 8.91 18.91 4.5 19.5 3.91 15.09 0.82 12 3.91 8.91 4.5 4.5 8.91 5.09 12 2"></polygon>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
            Premium
          </span>
          
          {course.isBestseller && (
            <span style={{ backgroundColor: '#c0e5e9', color: '#1b494d', padding: '4px 8px', fontSize: '12px', fontWeight: 'bold', borderRadius: '4px' }}>
              Bestseller
            </span>
          )}
        </div>
      </div>

      <div className="course-price" style={{ minWidth: '80px' }}>
        <div style={{fontWeight: 'bold', fontSize: '19px'}}>₹{course.price}</div>
        <div style={{fontSize: '14px', color: '#6a6f73', textDecoration: 'line-through'}}>₹3,199</div>
      </div>

      {/* THE HOVER OVERLAY POPUP */}
      {isHovered && (
        <div style={{
          position: 'absolute',
          top: '0',
          left: '50%', // Starts off a bit to the right
          marginLeft: '120px', 
          width: '340px',
          backgroundColor: 'white',
          border: '1px solid #d1d7dc',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          padding: '24px',
          zIndex: 100, // Forces it to render on top of EVERYTHING else
          borderRadius: '4px'
        }}>
          <h3 style={{ fontSize: '19px', fontWeight: 'bold', marginBottom: '16px', color: '#1c1d1f' }}>What you'll learn</h3>
          
          <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 16px 0' }}>
            <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '14px', color: '#1c1d1f', lineHeight: 1.4 }}>
              <span style={{ fontSize: '16px' }}>✓</span> Build projects for your portfolio, ready to apply for junior developer jobs.
            </li>
            <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '14px', color: '#1c1d1f', lineHeight: 1.4 }}>
              <span style={{ fontSize: '16px' }}>✓</span> Learn the latest technologies and best practices from industry experts.
            </li>
            <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '14px', color: '#1c1d1f', lineHeight: 1.4 }}>
              <span style={{ fontSize: '16px' }}>✓</span> After the course you will be able to build and deploy complex applications.
            </li>
          </ul>

          <button style={{ 
            width: '100%', 
            padding: '16px', 
            backgroundColor: '#5624d0', 
            color: 'white', 
            border: 'none', 
            fontWeight: 'bold', 
            fontSize: '16px', 
            cursor: 'pointer', 
            borderRadius: '4px',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#a435f0'} // UPDATED hover color (same as premium badge color)
          onMouseOut={(e) => e.target.style.backgroundColor = '#5624d0'}  // Resets color on mouse out
          >
            Add to cart
          </button>
        </div>
      )}
      
    </div>
  );
};

export default WebDevCourses;