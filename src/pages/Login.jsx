import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setUser({ email });
      navigate("/");
    }
  };

  return (
    <div style={styles.container}>
    

      {/* Main */}
      <div style={styles.main}>
        
        {/* Left */}
        <div style={styles.left}>
          <img src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x2.webp" alt="Login Picture"
          style={styles.image}/>
        </div>
        <img src="" alt="" />
        {/* Right */}
        <div style={styles.right}>
          <h2 style={styles.heading}>
            Log in to continue your learning journey
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />

            <button style={styles.continueBtn}>Continue</button>
          </form>

          <p style={styles.divider}>Other log in options</p>

          <div style={styles.social}>
            <button style={styles.socialBtn}>G</button>
            <button style={styles.socialBtn}>f</button>
            <button style={styles.socialBtn}></button>
          </div>

          <p style={styles.signupText}>
            Don't have an account?{" "}
            <span style={styles.link}>Sign up</span>
          </p>

          <p style={styles.link}>Log in with your organization</p>
        </div>
      </div>

      </div>
  );
}

export default LoginPage;

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "white",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    borderBottom: "1px solid #ddd",
  },

  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },

  loginBtn: {
    marginRight: "10px",
    border: "1px solid #5624d0",
    background: "white",
    color: "#5624d0",
    padding: "6px 12px",
    cursor: "pointer",
  },

  signupBtn: {
    background: "#5624d0",
    color: "white",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
  },

  main: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "80px",   // clean spacing
  padding: "50px",
},

  left: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  imageBox: {
    width: "300px",
    height: "300px",
    border: "2px dashed #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  right: {
    flex: 1,
    maxWidth: "400px",
  },

  image: {
  width: "500px",     // control size
  maxWidth: "100%",   // responsive
  height: "auto",
  objectFit: "contain",
},

  heading: {
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
  },

  continueBtn: {
    width: "100%",
    background: "#5624d0",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  },

  divider: {
    textAlign: "center",
    margin: "20px 0",
  },

  social: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },

  socialBtn: {
    padding: "8px 12px",
    border: "1px solid #ccc",
    cursor: "pointer",
  },

  signupText: {
    textAlign: "center",
    marginTop: "15px",
  },

  link: {
    color: "#5624d0",
    cursor: "pointer",
    textAlign: "center",
    display: "block",
    marginTop: "10px",
  },

  footer: {
    background: "#1c1d1f",
    color: "white",
    padding: "40px",
    marginTop: "50px",
  },

  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: "20px",
    gap: "20px",
  },

  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    borderTop: "1px solid #444",
    paddingTop: "10px",
  },
};