//BIG BLACK BOX WITH THREE CERFIFICATIONS IN IT. 
// THIS IS THE "GET CERTIFIED AND GET AHEAD IN YOUR CAREER" SECTION. 
// THE DATA FOR THE CERTIFICATIONS IS HARDCODED IN THIS COMPONENT.

const Certifications = () => {
  const items = [
    {
      title: "CompTIA",
      desc: "Cloud, Networking, Cybersecurity",
      img: "https://images.unsplash.com/photo-1633265486064-086b219458ec",
    },
    {
      title: "AWS",
      desc: "Cloud, AI, Coding, Networking",
      img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    },
    {
      title: "PMI",
      desc: "Project & Program Management",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>

        {/* LEFT SIDE */}
        <div style={styles.left}>
          <h2 style={styles.title}>
            Get certified and get ahead in your career
          </h2>

          <p style={styles.desc}>
            Prep for certifications with comprehensive courses, practice tests, and special offers on exam vouchers.
          </p>

          <p style={styles.link}>
            Explore certifications and vouchers →
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.cards}>
          {items.map((item, i) => (
            <div key={i} style={styles.card}>
              
              <img src={item.img} style={styles.img} />

              <h4 style={styles.cardTitle}>{item.title}</h4>

              <p style={styles.cardDesc}>{item.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Certifications;

const styles = {
  wrapper: {
    maxWidth: "1250px",
    margin: "60px auto",
    padding: "0 20px",
  },

  container: {
    background: "#1c1f2e",
    color: "white",
    borderRadius: "20px",
    padding: "80px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",
  },

  left: {
    maxWidth: "400px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "15px",
  },

  desc: {
    color: "#cbd5e1",
    marginBottom: "20px",
    lineHeight: "1.5",
  },

  link: {
    fontWeight: "600",
    cursor: "pointer",
  },

  cards: {
    display: "flex",
    gap: "20px",
  },

  card: {
    background: "#2a2e3f",
    padding: "15px",
    borderRadius: "15px",
    width: "180px",
  },

  img: {
    width: "100%",
    height: "100px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  cardTitle: {
    fontSize: "16px",
    fontWeight: "600",
  },

  cardDesc: {
    fontSize: "12px",
    color: "#cbd5e1",
  },
};