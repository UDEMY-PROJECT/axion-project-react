import React, { useState } from 'react';

const FilterSidebar = ({ 
  setMinRating, 
  selectedDurations, setSelectedDurations, 
  selectedLevels, setSelectedLevels,
  selectedSidebarTopics, setSelectedSidebarTopics,
  selectedPrices, setSelectedPrices
}) => {
  const [openSections, setOpenSections] = useState({
    ratings: true,
    duration: true,
    level: true,
    topic: false,
    price: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleRatingChange = (event) => {
    setMinRating(Number(event.target.value));
  };

  const handleCheckboxToggle = (value, currentArray, setArrayFunc) => {
    if (currentArray.includes(value)) {
      setArrayFunc(currentArray.filter(item => item !== value));
    } else {
      setArrayFunc([...currentArray, value]);
    }
  };

  return (
    <div style={{ paddingRight: '16px' }}>
      
      {/* 1. RATINGS SECTION */}
      <div style={{ borderTop: '1px solid #d1d7dc', paddingTop: '16px', paddingBottom: '16px' }}>
        <button onClick={() => toggleSection('ratings')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', background: 'none', border: 'none', cursor: 'pointer', fontSize: '19px', fontWeight: 'bold', padding: 0, marginBottom: openSections.ratings ? '16px' : '0' }}>
          Ratings <span>{openSections.ratings ? '▲' : '▼'}</span>
        </button>
        {openSections.ratings && (
          <div style={{ fontSize: '16px' }}>
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', cursor: 'pointer' }}>
              <input type="radio" name="rating" value="4.5" onChange={handleRatingChange} style={{ marginRight: '12px', width: '18px', height: '18px' }} />
              <span style={{ color: '#b4690e' }}>⭐⭐⭐⭐⭐</span> <span style={{ marginLeft: '4px' }}>4.5 & up</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', cursor: 'pointer' }}>
              <input type="radio" name="rating" value="4.0" onChange={handleRatingChange} style={{ marginRight: '12px', width: '18px', height: '18px' }} />
              <span style={{ color: '#b4690e' }}>⭐⭐⭐⭐</span> <span style={{ marginLeft: '4px' }}>4.0 & up</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', cursor: 'pointer' }}>
              <input type="radio" name="rating" value="3.5" onChange={handleRatingChange} style={{ marginRight: '12px', width: '18px', height: '18px' }} />
              <span style={{ color: '#b4690e' }}>⭐⭐⭐</span> <span style={{ marginLeft: '4px' }}>3.5 & up</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input type="radio" name="rating" value="0" onChange={handleRatingChange} style={{ marginRight: '12px', width: '18px', height: '18px' }} />
              Clear Ratings Filter
            </label>
          </div>
        )}
      </div>

      {/* 2. VIDEO DURATION SECTION */}
      <div style={{ borderTop: '1px solid #d1d7dc', paddingTop: '16px', paddingBottom: '16px' }}>
        <button onClick={() => toggleSection('duration')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', background: 'none', border: 'none', cursor: 'pointer', fontSize: '19px', fontWeight: 'bold', padding: 0, marginBottom: openSections.duration ? '16px' : '0' }}>
          Video Duration <span>{openSections.duration ? '▲' : '▼'}</span>
        </button>
        {openSections.duration && (
          <div style={{ fontSize: '16px' }}>
            {['0-1 Hour', '1-3 Hours', '3-6 Hours', '6+ Hours'].map(duration => (
              <label key={duration} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={selectedDurations.includes(duration)}
                  onChange={() => handleCheckboxToggle(duration, selectedDurations, setSelectedDurations)}
                  style={{ marginRight: '12px', width: '18px', height: '18px' }} 
                />
                {duration}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 3. LEVEL SECTION */}
      <div style={{ borderTop: '1px solid #d1d7dc', paddingTop: '16px', paddingBottom: '16px' }}>
        <button onClick={() => toggleSection('level')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', background: 'none', border: 'none', cursor: 'pointer', fontSize: '19px', fontWeight: 'bold', padding: 0, marginBottom: openSections.level ? '16px' : '0' }}>
          Level <span>{openSections.level ? '▲' : '▼'}</span>
        </button>
        {openSections.level && (
          <div style={{ fontSize: '16px' }}>
            {['All Levels', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
              <label key={level} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={selectedLevels.includes(level)}
                  onChange={() => handleCheckboxToggle(level, selectedLevels, setSelectedLevels)}
                  style={{ marginRight: '12px', width: '18px', height: '18px' }} 
                />
                {level}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 4. TOPIC SECTION (NEW!) */}
      <div style={{ borderTop: '1px solid #d1d7dc', paddingTop: '16px', paddingBottom: '16px' }}>
        <button onClick={() => toggleSection('topic')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', background: 'none', border: 'none', cursor: 'pointer', fontSize: '19px', fontWeight: 'bold', padding: 0, marginBottom: openSections.topic ? '16px' : '0' }}>
          Topic <span>{openSections.topic ? '▲' : '▼'}</span>
        </button>
        {openSections.topic && (
          <div style={{ fontSize: '16px' }}>
            {['Web Development', 'JavaScript', 'React', 'iOS', 'Python'].map(topic => (
              <label key={topic} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={selectedSidebarTopics.includes(topic)}
                  onChange={() => handleCheckboxToggle(topic, selectedSidebarTopics, setSelectedSidebarTopics)}
                  style={{ marginRight: '12px', width: '18px', height: '18px' }} 
                />
                {topic}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 5. PRICE SECTION (NEW!) */}
      <div style={{ borderTop: '1px solid #d1d7dc', borderBottom: '1px solid #d1d7dc', paddingTop: '16px', paddingBottom: '16px' }}>
        <button onClick={() => toggleSection('price')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', background: 'none', border: 'none', cursor: 'pointer', fontSize: '19px', fontWeight: 'bold', padding: 0, marginBottom: openSections.price ? '16px' : '0' }}>
          Price <span>{openSections.price ? '▲' : '▼'}</span>
        </button>
        {openSections.price && (
          <div style={{ fontSize: '16px' }}>
            {['Paid', 'Free'].map(price => (
              <label key={price} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={selectedPrices.includes(price)}
                  onChange={() => handleCheckboxToggle(price, selectedPrices, setSelectedPrices)}
                  style={{ marginRight: '12px', width: '18px', height: '18px' }} 
                />
                {price}
              </label>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default FilterSidebar;