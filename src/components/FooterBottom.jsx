const FooterBottom = () => {
  return (
    <div style={styles.outer}>
      <div style={styles.wrapper}>
        
        {/* LEFT */}
        <div style={styles.left}>
          <h2 style={styles.logo}>Axion</h2>
          <p style={styles.copy}>© 2026 Axion, Inc.</p>
        </div>

        {/* CENTER */}
        <p style={styles.center}>Cookie settings</p>

        {/* RIGHT */}
        <p style={styles.right}>🌐 English</p>

      </div>
    </div>
  );
};

export default FooterBottom;

const styles = {
  /*  FULL WIDTH BACKGROUND */
  outer: {
    width: "100%",
    background: "#090909",
    borderTop: "1px solid #3e4143",
  },

  /* CENTER CONTENT ONLY */
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  logo: {
    fontSize: "22px",
    fontWeight: "700",
  },

  copy: {
    fontSize: "13px",
    color: "#a1a7ac",
  },

  center: {
    fontSize: "13px",
    cursor: "pointer",
    color: "#a1a7ac",
  },

  right: {
    fontSize: "13px",
    cursor: "pointer",
    color: "#a1a7ac",
  },
};