import React from 'react';

const PopularInstructors = () => {
  const instructors = [
    { 
      name: "Angela Yu", 
      title: "Developer and Lead Instructor", 
      rating: "4.7", 
      students: "2,000,000", 
      courses: "7", 
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=64&h=64&q=80" 
    },
    { 
      name: "Maximilian Schwarzmüller", 
      title: "Professional Web Developer", 
      rating: "4.6", 
      students: "2,500,000", 
      courses: "42", 
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=64&h=64&q=80" 
    },
    { 
      name: "Brad Traversy", 
      title: "Full Stack Web Developer", 
      rating: "4.7", 
      students: "850,000", 
      courses: "20", 
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=64&h=64&q=80" 
    },
    { 
      name: "Academind by Maximilian", 
      title: "Online Education", 
      rating: "4.6", 
      students: "2,600,000", 
      courses: "43", 
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=64&h=64&q=80" 
    }
  ];

  return (
    <div style={{ marginBottom: '48px' }}>
      <h2 className="section-title">Popular Instructors</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {instructors.map((inst, index) => (
          <div key={index} style={{ border: '1px solid #d1d7dc', padding: '16px', display: 'flex', gap: '16px', alignItems: 'center', cursor: 'pointer' }}>
            {/* The image tag now uses the real Unsplash photos */}
            <img src={inst.img} alt={inst.name} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }} />
            
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 4px 0' }}>{inst.name}</h3>
              <p style={{ fontSize: '12px', color: '#6a6f73', margin: '0 0 4px 0' }}>{inst.title}</p>
              <div style={{ fontSize: '12px', color: '#6a6f73' }}>
                <span style={{ color: '#b4690e', fontWeight: 'bold' }}>{inst.rating}</span> Instructor Rating<br/>
                <span style={{ fontWeight: 'bold', color: '#1c1d1f' }}>{inst.students}</span> students
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;