import React, { useState, useRef, useEffect } from 'react';
import CardCourse from './CardCourse';
import { COURSE_DATA, CATEGORY_IMAGES } from '../../data/Subscribecourses';
import './Tabs.css';

// Safely outside the component to prevent infinite renders
const categories = Object.keys(COURSE_DATA);

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  
  const tabsRef = useRef([]);
  const prevTabRef = useRef(categories[0]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const updatePosition = (isResize = false) => {
      const activeIndex = categories.indexOf(activeTab);
      const currentTab = tabsRef.current[activeIndex];
      const prevIndex = categories.indexOf(prevTabRef.current);
      const oldTab = tabsRef.current[prevIndex];

      if (!currentTab) return;

      const newLeft = currentTab.offsetLeft;
      const newWidth = currentTab.offsetWidth;

      // Instant snap on page load or window resize
      if (isResize || !oldTab || activeTab === prevTabRef.current) {
        setIndicatorStyle({
          transform: `translateX(${newLeft}px)`,
          width: `${newWidth}px`,
          transition: 'none'
        });
        return;
      }

      const oldLeft = oldTab.offsetLeft;
      const oldWidth = oldTab.offsetWidth;
      const isMovingRight = newLeft > oldLeft;

      // GOOEY MATH: Calculate the distance between tabs
      const stretchLeft = Math.min(oldLeft, newLeft);
      // Caps the maximum stretch so it looks like a flying droplet over long distances
      const stretchWidth = Math.min(Math.abs(newLeft - oldLeft), 250) + (isMovingRight ? newWidth : oldWidth);

      // PHASE 1: The Liquid Stretch
      setIndicatorStyle({
        transform: `translateX(${stretchLeft}px)`,
        width: `${stretchWidth}px`,
        // Fast, smooth stretch out
        transition: 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
      });

      // Clear any existing timeouts to prevent spam-click bugs
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // PHASE 2: The Bouncy Snap
      timeoutRef.current = setTimeout(() => {
        setIndicatorStyle({
          transform: `translateX(${newLeft}px)`,
          width: `${newWidth}px`,
          // The iOS "spring" physics snap
          transition: 'width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        });
      }, 150); // This precise 150ms delay creates the droplet illusion
    };

    updatePosition();
    prevTabRef.current = activeTab;

    // Handle window resizing safely
    const handleResize = () => updatePosition(true);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeTab]); // Safe dependency!

  return (
    <section className="tabs-wrapper">
      <div className="tabs-container">
        
        <div className="tabs-header-text">
          <h2>Get a peek at the collection</h2>
          <p>With thousands of our best-rated courses from top Udemy instructors, Personal Plan is your subscription to success. Explore some of the included content below.</p>
        </div>

        <div className="tabs-nav-container">
          <div className="tabs-nav">
            
            {/* The Gooey Liquid Glass Element */}
            <div className="glass-indicator" style={indicatorStyle}></div>

            {categories.map((cat, index) => (
              <button 
                key={cat} 
                ref={(el) => (tabsRef.current[index] = el)}
                className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="tabs-content-area">
          <div className="category-image-container">
            <img 
              src={CATEGORY_IMAGES[activeTab]} 
              alt={`${activeTab} illustration`} 
              className="category-image" 
            />
          </div>
          
          <div className="course-grid">
            {COURSE_DATA[activeTab]?.length > 0 ? (
              COURSE_DATA[activeTab].map((course) => (
                <CardCourse key={course.id} data={course} />
              ))
            ) : (
              <p className="no-courses">Courses for {activeTab} coming soon.</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Tabs;