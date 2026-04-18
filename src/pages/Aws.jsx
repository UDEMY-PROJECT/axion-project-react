import { useRef } from "react";

const Aws = () => {
  const scrollRef1 = useRef();
  const scrollRef2 = useRef();

  const scrollRight = (ref) => {
    ref.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div style={styles.wrapper}>

      {/* 🔥 HEADER SECTION */}
      <div style={styles.header}>
        <p style={styles.breadcrumb}>
          Certification Preparation &gt; AWS Certifications
        </p>

        <h1 style={styles.mainTitle}>
          Amazon Web Services (AWS) Certifications Courses
        </h1>

        <p style={styles.meta}>
          👤 11,389,177 learners • Prepare for your certification with these courses.
        </p>

        <p style={styles.desc}>
          Amazon Web Services (AWS) training and certification certifies professionals
          in various AWS cloud products and solutions, ranging from cloud practitioner
          to machine learning specialist.
        </p>
      </div>

      {/* 🔹 SECTION 1 */}
      <h2 style={styles.heading}>In Demand Certifications</h2>
      <p style={styles.sub}>
        Dive into Top Certifications that learners are preparing for
      </p>

      <div style={styles.rowWrapper}>
        <div style={styles.row} ref={scrollRef1}>
          {certifications.map((item, i) => (
            <div key={i} style={styles.card}>
              <div>
                <h4 style={styles.title}>{item.title}</h4>
                <p style={styles.learners}>👤 {item.learners} learners</p>
              </div>

              <img src={item.image} style={styles.badge} />
            </div>
          ))}
        </div>

        <button style={styles.arrow} onClick={() => scrollRight(scrollRef1)}>
          →
        </button>
      </div>

      {/* 🔹 SECTION 2 */}
      <h2 style={styles.heading}>
        Browse Amazon Web Services (AWS) Certifications by Skill
      </h2>

      <p style={styles.sub}>
        Get Certified for in-demand skills through our catalog
      </p>

      <div style={styles.rowWrapper}>
        <div style={styles.row} ref={scrollRef2}>
          {skills.map((item, i) => (
            <div key={i} style={styles.cardColumn}>
              <h4 style={styles.title}>{item.title}</h4>

              <p style={styles.learners}>👤 {item.learners} learners</p>

              <p style={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>

        <button style={styles.arrow} onClick={() => scrollRight(scrollRef2)}>
          →
        </button>
      </div>

    </div>
  );
};

export default Aws;

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    learners: "3,931,313",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    learners: "2,585,261",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    title: "AWS Certified Developer – Associate",
    learners: "1,381,063",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
  },
  {
    title: "AWS Certified Solutions Architect – Professional",
    learners: "599,953",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
];

const skills = [
  {
    title: "Cloud Certification",
    learners: "18,621,113",
    desc: "Gain a solid foundation in cloud concepts, architecture, and services.",
  },
  {
    title: "Cybersecurity Certification",
    learners: "6,598,564",
    desc: "Prove your cybersecurity expertise with real-world skills.",
  },
  {
    title: "Networking Certification",
    learners: "5,963,131",
    desc: "Design and manage network systems with AWS tools.",
  },
  {
    title: "Coding Certification",
    learners: "2,444,298",
    desc: "Validate programming skills in Python, Java, and more.",
  },
];

const styles = {
  wrapper: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 20px",
  },

  header: {
    marginBottom: "30px",
  },

  breadcrumb: {
    color: "#a435f0",
    fontSize: "14px",
    marginBottom: "10px",
  },

  mainTitle: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  meta: {
    color: "#6b7280",
    marginBottom: "10px",
  },

  desc: {
    color: "#374151",
    maxWidth: "800px",
    lineHeight: "1.6",
  },

  heading: {
    fontSize: "24px",
    fontWeight: "700",
    marginTop: "30px",
  },

  sub: {
    color: "#6b7280",
    marginBottom: "20px",
  },

  rowWrapper: {
    position: "relative",
  },

  row: {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    scrollbarWidth: "none",
  },

  card: {
    minWidth: "300px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "white",
  },

  cardColumn: {
    minWidth: "300px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    background: "white",
  },

  title: {
    fontSize: "15px",
    fontWeight: "600",
    marginBottom: "6px",
  },

  learners: {
    fontSize: "13px",
    color: "#6b7280",
  },

  badge: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "6px",
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
};