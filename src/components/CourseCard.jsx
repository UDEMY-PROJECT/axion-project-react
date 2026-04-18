//THIS MANAGES THE COURSE CARDS IN THE SKILL COURSES SECTION. 
// IT ALSO MANAGES THE HOVER POPUP FEATURE OF THE COURSE CARDS.

import { useState } from "react";

const CourseCard = ({ course }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={styles.wrapper}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 👇 MAIN CARD */}
      <div style={styles.card}>
        <img src={course.image} style={styles.image} />

        <h4 style={styles.title}>{course.title}</h4>

        <p style={styles.instructor}>{course.instructor}</p>

        <div style={styles.row}>
          <span style={styles.badge}>Bestseller</span>

          <span style={styles.rating}>⭐ {course.rating}</span>

          <span style={styles.students}>({course.students})</span>
        </div>

        <p style={styles.price}>₹{course.price}</p>
      </div>

      {/* 👇 HOVER POPUP */}
      {hovered && (
        <div style={styles.popup}>
          <h4 style={{ fontSize: "16px", fontWeight: "600" }}>
            {course.title}
          </h4>

          <p style={styles.popupMeta}>
            Updated March 2026 • All Levels • Subtitles
          </p>

          <ul style={styles.list}>
            <li>✔ Learn core concepts</li>
            <li>✔ Hands-on projects</li>
            <li>✔ Real-world use cases</li>
          </ul>

          <button style={styles.popupBtn}>Add to cart</button>
        </div>
      )}
    </div>
  );
};

export default CourseCard;

const styles = {
  wrapper: {
    position: "relative",
  },

  card: {
    width: "260px",
    flexShrink: 0,
    padding: "10px",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    background: "white",
  },

  image: {
    width: "100%",
    borderRadius: "8px",
  },

  title: {
    fontSize: "15px",
    fontWeight: "600",
    margin: "8px 0",
  },

  instructor: {
    fontSize: "12px",
    color: "gray",
  },

  row: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    margin: "6px 0",
  },

  badge: {
    background: "#eceb98",
    padding: "2px 6px",
    fontSize: "11px",
    borderRadius: "4px",
    fontWeight: "600",
  },

  rating: {
    fontSize: "12px",
    fontWeight: "600",
  },

  students: {
    fontSize: "12px",
    color: "gray",
  },

  price: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "5px",
  },

  /* 🔥 POPUP STYLES */
  popup: {
    position: "absolute",
    top: "0",
    left: "105%",
    width: "260px",
    background: "white",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    zIndex: 10,
  },

  popupMeta: {
    fontSize: "13px",
    color: "gray",
    margin: "6px 0",
  },

  list: {
    fontSize: "13px",
    paddingLeft: "15px",
    margin: "10px 0",
  },

  popupBtn: {
    background: "#a435f0",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    width: "100%",
    cursor: "pointer",
    fontWeight: "600",
  },
};