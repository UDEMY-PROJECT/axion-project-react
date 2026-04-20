import React from 'react';

const PopularTopics = ({ selectedTopic, setSelectedTopic }) => {
  const topics = [
    "Web Development", "JavaScript", "React JS", "Angular", 
    "Java", "Android Development", "iOS Development", "CSS"
  ];

  const handleTopicClick = (topic) => {
    // If the user clicks the topic that is already selected, turn it off. 
    // Otherwise, turn the new one on!
    if (selectedTopic === topic) {
      setSelectedTopic(null); 
    } else {
      setSelectedTopic(topic);
    }
  };

  return (
    <div style={{ marginBottom: '48px' }}>
      <h2 className="section-title">Popular topics</h2>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div 
            key={index} 
            onClick={() => handleTopicClick(topic)}
            className="topic-pill"
            style={{
              // If this topic is the selected one, invert the colors!
              backgroundColor: selectedTopic === topic ? '#1c1d1f' : 'white',
              color: selectedTopic === topic ? 'white' : '#1c1d1f',
              borderColor: '#1c1d1f'
            }}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTopics;