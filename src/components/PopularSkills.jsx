const PopularSkills = () => {
  return (
    <div style={styles.wrapper}>

      <h2 style={styles.heading}>Popular Skills</h2>

      <div style={styles.container}>

        {/* LEFT BIG BLOCK */}
        <div style={styles.left}>
          <h3 style={styles.bigTitle}>ChatGPT is a top skill</h3>

          <p style={styles.link}>See ChatGPT courses →</p>
          <p style={styles.learners}>5,569,838 learners</p>

          <button style={styles.button}>
            Show all trending skills ↗
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.columns}>

          {/* DEVELOPMENT */}
          <div>
            <h4 style={styles.colTitle}>Development</h4>

            <p style={styles.skill}>Python →</p>
            <p style={styles.meta}>50,443,141 learners</p>

            <p style={styles.skill}>Web Development →</p>
            <p style={styles.meta}>14,531,850 learners</p>

            <p style={styles.skill}>Data Science →</p>
            <p style={styles.meta}>8,401,566 learners</p>
          </div>

          {/* DESIGN */}
          <div>
            <h4 style={styles.colTitle}>Design</h4>

            <p style={styles.skill}>Blender →</p>
            <p style={styles.meta}>3,132,603 learners</p>

            <p style={styles.skill}>AutoCAD →</p>
            <p style={styles.meta}>2,154,550 learners</p>

            <p style={styles.skill}>Graphic Design →</p>
            <p style={styles.meta}>4,707,918 learners</p>
          </div>

          {/* BUSINESS */}
          <div>
            <h4 style={styles.colTitle}>Business</h4>

            <p style={styles.skill}>PMI Project Management Professional →</p>
            <p style={styles.meta}>2,922,106 learners</p>

            <p style={styles.skill}>Microsoft Power BI →</p>
            <p style={styles.meta}>5,205,053 learners</p>

            <p style={styles.skill}>PMI Certified Associate in Project Management →  </p>
            <p style={styles.meta}>499,132 learners</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PopularSkills;

const styles = {
  wrapper: {
    maxWidth: "1600px",
    margin: "0 auto", 
    padding: " 20px",
    background: "#eef0f3"
    

  },

  content: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "60px",
},

  heading: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "20px",
    borderBottom: "1px solid #b0b2b4",
    paddingBottom: "10px",
  },

  container: {
  display: "flex",
  gap: "60px",
  marginTop: "20px",
  alignItems: "flex-start",
},

  left: {
  flex: "1",
  maxWidth: "320px",
},

columns: {
  display: "flex",
  gap: "60px",
  flex: "2",
  justifyContent: "space-between",
  
},

right: {
  flex: "2",
  display: "flex",
  justifyContent: "space-between",
  
},

  bigTitle: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  link: {
    color: "#a435f0",
    fontWeight: "600",
    cursor: "pointer",
  },

  learners: {
    color: "#6b7280",
    fontSize: "13px",
    marginBottom: "20px",
  },

  button: {
    border: "1px solid #a435f0",
    padding: "10px 16px",
    borderRadius: "8px",
    background: "transparent",
    cursor: "pointer",
    fontWeight: "600",
  },


  colTitle: {
    fontWeight: "700",
    marginBottom: "10px",
  },

  skill: {
    color: "#a435f0",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
  },

  meta: {
    fontSize: "12px",
    color: "#6b7280",
  },
};