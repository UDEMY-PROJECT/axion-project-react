//THIS DECIDES WHICH COURSES TO SHOW IN THE **SKILLCOURSES** SECTION BASED ON THE SELECTED TAB. 
// IT ALSO HANDLES THE SCROLLING OF THE COURSE CARDS.
// THE UI and HOVER feature OF THIS COMPONENT IS IN COURSECARD.JSX

import { useRef, useState } from "react";
import { courses } from "../data/courses";
import CourseCard from "./CourseCard";

const SkillCourses = () => {
  const scrollRef = useRef();
  const [activeTab, setActiveTab] = useState("Artificial Intelligence");

  const tabs = [
    "Artificial Intelligence",
    "Python",
    "Microsoft Excel",
    "Digital Marketing",
    "Amazon AWS",
  ];

  const filteredCourses = courses.filter(
    (course) => course.category === activeTab
  );

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div style={styles.wrapper}>

      <h2 style={styles.title}>
        Skills to transform your career and life
      </h2>

      <p style={styles.desc}>
        From critical skills to technical topics, Udemy supports your professional development.
      </p>

      {/* TABS */}
      <div style={styles.tabs}>
        {tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {}),
            }}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* CARDS */}
      <div style={styles.container}>
        <div style={styles.scroll} ref={scrollRef}>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <button style={styles.arrow} onClick={scrollRight}>
          →
        </button>
      </div>

    </div>
  );
};

export default SkillCourses;

const styles = {
  wrapper: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 20px",
  },

  container: {
    position: "relative",
    overflow: "hidden",
    maxWidth: "1100px",
  },

  scroll: {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
  },

  arrow: {
    position: "absolute",
    right: "-10px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "white",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  desc: {
    color: "#6b7280",
    marginBottom: "20px",
  },

  tabs: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
    fontSize: "14px",
    color: "#555",
  },

  activeTab: {
    fontWeight: "600",
    borderBottom: "2px solid black",
    paddingBottom: "5px",
  },

  tab: {
    cursor: "pointer",
    paddingBottom: "5px",
  },
};