const Testimonials = () => {
  const testimonials = [
    {
      text: "Because of this course I was able to clear my two interviews... Thanks for making such wonderful content.",
      name: "Diksha S",
      initials: "DS",
      link: "Business Intelligence (BI)",
    },
    {
      text: "This has helped me so much in my career... I joined as a frontend engineer and eventually transitioned to full stack engineer.",
      name: "Chethan B",
      initials: "CB",
      link: "Go (golang) course",
    },
    {
      text: "Today, I am a software developer, and I credit a significant part of my success to this course.",
      name: "Batchu K",
      initials: "BK",
      link: "Java course",
    },
    {
      text: "I would highly recommend this Web Development Bootcamp to anyone looking to enhance their skills.",
      name: "Ankit K",
      initials: "AK",
      link: "Web Development course",
    },
  ];

  return (
    <div style={styles.wrapper}>
      
      <h2 style={styles.heading}>
        See what others are achieving through learning
      </h2>

      <div style={styles.grid}>
        
        {testimonials.map((item, i) => (
          <div key={i} style={styles.card}>

            <div style={styles.quote}>“</div>

            <p style={styles.text}>{item.text}</p>

            <div style={styles.userRow}>
              <div style={styles.avatar}>{item.initials}</div>
              <span style={styles.name}>{item.name}</span>
            </div>

            <a style={styles.link}>
              View this {item.link} →
            </a>

          </div>
        ))}

      </div>

      <p style={styles.bottomLink}>
        View all stories →
      </p>

    </div>
  );
};

export default Testimonials;

const styles = {
  wrapper: {
    maxWidth: "1200px",
    margin: "60px auto",
    padding: "0 20px",
  },

  heading: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  },

  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "20px",
    background: "white",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  quote: {
    fontSize: "30px",
    color: "#999",
  },

  text: {
    fontSize: "14px",
    color: "#374151",
    lineHeight: "1.5",
  },

  userRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#111",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
  },

  name: {
    fontSize: "14px",
    color: "#333",
  },

  link: {
    marginTop: "auto",
    color: "#a435f0",
    fontSize: "14px",
    cursor: "pointer",
  },

  bottomLink: {
    marginTop: "20px",
    color: "#a435f0",
    fontWeight: "500",
    cursor: "pointer",
  },
};