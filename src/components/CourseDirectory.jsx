import React, { useState, useEffect } from 'react';
import WebDevCourses from './WebDevCourses';
import FilterSidebar from './FilterSidebar';
import FeaturedCarousel from './FeaturedCarousel';
import PopularTopics from './PopularTopics';
import PopularInstructors from './PopularInstructors';
import mockCourses from './mockCourses.json';

const CourseDirectory = () => {
  const [courses, setCourses] = useState(mockCourses);
  
  // --- ALL STATES (Memories) ---
  const [minRating, setMinRating] = useState(0);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null); 
  const [selectedSidebarTopics, setSelectedSidebarTopics] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState('Most Popular');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  const [activeCategory, setActiveCategory] = useState('Development'); // For the Sub-Navbar
  
  const coursesPerPage = 4;

  // Reset to page 1 whenever ANY filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [minRating, sortBy, selectedTopic, selectedDurations, selectedLevels, selectedSidebarTopics, selectedPrices]);

  // --- FILTERING ENGINE ---
  let processedCourses = [...courses];

  // 1. Rating Filter
  processedCourses = processedCourses.filter(course => course.rating >= minRating);

  // 2. Topic Filter (from the top pill buttons)
  if (selectedTopic) {
    const searchTerm = selectedTopic === "React JS" ? "React" : selectedTopic;
    processedCourses = processedCourses.filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // 3. Sidebar Topic Filter
  if (selectedSidebarTopics.length > 0) {
    processedCourses = processedCourses.filter(course => 
      selectedSidebarTopics.some(topic => 
        course.title.toLowerCase().includes(topic.toLowerCase()) || 
        course.description.toLowerCase().includes(topic.toLowerCase())
      )
    );
  }

  // 4. Duration Filter
  if (selectedDurations.length > 0) {
    processedCourses = processedCourses.filter(course => {
      const hours = course.totalHours;
      return (
        (selectedDurations.includes('0-1 Hour') && hours <= 1) ||
        (selectedDurations.includes('1-3 Hours') && hours > 1 && hours <= 3) ||
        (selectedDurations.includes('3-6 Hours') && hours > 3 && hours <= 6) ||
        (selectedDurations.includes('6+ Hours') && hours > 6)
      );
    });
  }

  // 5. Level Filter
  if (selectedLevels.length > 0) {
    processedCourses = processedCourses.filter(course => selectedLevels.includes(course.level));
  }

  // 6. Price Filter 
  if (selectedPrices.length > 0) {
    processedCourses = processedCourses.filter(course => {
      const isFree = course.price === "Free" || course.price === "0";
      return (selectedPrices.includes('Free') && isFree) || (selectedPrices.includes('Paid') && !isFree);
    });
  }

  // --- SORTING ENGINE ---
  if (sortBy === 'Highest Rated') {
    processedCourses.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'Most Popular') {
    processedCourses.sort((a, b) => b.reviews - a.reviews);
  }

  // --- PAGINATION ENGINE ---
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCoursesOnPage = processedCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(processedCourses.length / coursesPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      {/* DYNAMIC SUB-NAVBAR */}
      <div style={{ display: 'flex', gap: '20px', fontSize: '13px', padding: '12px 0', borderBottom: '1px solid #d1d7dc', marginBottom: '24px', color: '#6a6f73', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {[
          'Development', 'Web Development', 'Data Science', 'Mobile Development', 
          'Programming Languages', 'Game Development', 'Database Design', 
          'Software Testing', 'Software Engineering'
        ].map((cat) => (
          <span 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{ 
              color: activeCategory === cat ? '#1c1d1f' : '#6a6f73', 
              borderBottom: activeCategory === cat ? '2px solid #1c1d1f' : 'none', 
              fontWeight: activeCategory === cat ? 'bold' : 'normal', 
              paddingBottom: '12px', 
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out'
            }}
          >
            {cat}
          </span>
        ))}
      </div>

      <div style={{ fontSize: '14px', color: '#5624d0', fontWeight: 'bold', marginBottom: '16px' }}>
        <span style={{ cursor: 'pointer' }}>Development</span>
        <span style={{ color: '#6a6f73', margin: '0 8px' }}>&gt;</span>
        <span style={{ cursor: 'pointer' }}>Web Development</span>
      </div>

      <h1 className="page-title">Web Development Courses</h1>
      
      <h2 className="section-title">Courses to get you started</h2>
      <FeaturedCarousel />

      <div style={{ backgroundColor: '#f7f9fa', padding: '24px', display: 'flex', justifyContent: 'space-around', border: '1px solid #d1d7dc', marginBottom: '48px', fontWeight: 'bold', fontSize: '16px' }}>
        <span>🎥 Learn on your schedule</span>
        <span>💼 Choose from 210,000 online courses</span>
        <span>♾️ Enjoy lifetime access to courses</span>
      </div>

      <PopularTopics selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
      <PopularInstructors />

      <h2 className="section-title" style={{ marginTop: '48px' }}>All Web Development courses</h2>
      <div style={{ border: '1px solid #d1d7dc', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', fontWeight: 'bold' }}>
        <span style={{ fontSize: '24px' }}>🛡️</span>
        Not sure? All courses have a 30-day money-back guarantee
      </div>

      <div className="main-layout">
        
        {isSidebarOpen && (
          <aside className="sidebar">
            <FilterSidebar 
              setMinRating={setMinRating} 
              selectedDurations={selectedDurations}
              setSelectedDurations={setSelectedDurations}
              selectedLevels={selectedLevels}
              setSelectedLevels={setSelectedLevels}
              selectedSidebarTopics={selectedSidebarTopics}
              setSelectedSidebarTopics={setSelectedSidebarTopics}
              selectedPrices={selectedPrices}
              setSelectedPrices={setSelectedPrices}
            />
          </aside>
        )}

        <main className="content-area">
          <div className="list-controls" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ border: '1px solid #1c1d1f', padding: '12px 16px', display: 'flex', gap: '8px', alignItems: 'center', fontWeight: 'bold', background: 'white', cursor: 'pointer', fontSize: '16px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                Filter
              </button>
              <select className="sort-dropdown" value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ padding: '12px 16px', border: '1px solid #1c1d1f', fontWeight: '700', background: 'white', cursor: 'pointer', fontSize: '16px' }}>
                <option value="Most Popular">Sort by: Most Popular</option>
                <option value="Highest Rated">Sort by: Highest Rated</option>
              </select>
            </div>
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#6a6f73' }}>
              {processedCourses.length} results
            </span>
          </div>

          <div className="course-list">
            {currentCoursesOnPage.length === 0 ? (
              <div style={{ padding: '48px', textAlign: 'center', color: '#6a6f73', fontSize: '19px' }}>
                No courses match your exact filters. Try clearing some checkboxes!
              </div>
            ) : (
              currentCoursesOnPage.map(course => (
                <WebDevCourses key={course.id} course={course} />
              ))
            )}
          </div>

          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '48px', alignItems: 'center', fontWeight: 'bold' }}>
              <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} style={{ padding: '8px 12px', border: '1px solid #1c1d1f', borderRadius: '50%', background: 'none', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', opacity: currentPage === 1 ? 0.3 : 1 }}>
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(num => (
                <span key={num} onClick={() => paginate(num)} style={{ cursor: 'pointer', padding: '4px 8px', color: currentPage === num ? '#1c1d1f' : '#5624d0', borderBottom: currentPage === num ? '2px solid #1c1d1f' : 'none' }}>
                  {num}
                </span>
              ))}
              <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} style={{ padding: '8px 12px', border: '1px solid #1c1d1f', borderRadius: '50%', background: 'none', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', opacity: currentPage === totalPages ? 0.3 : 1 }}>
                &gt;
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CourseDirectory;