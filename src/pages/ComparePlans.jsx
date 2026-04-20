import React from "react";

const styles = {
  page: { background: "#f5f5f5", minHeight: "100vh", fontFamily: "Arial, sans-serif" },
  navbar: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 40px", borderBottom: "1px solid #ddd", background: "#fff" },
  navLeft: { display: "flex", alignItems: "center", gap: 30 },
  logo: { fontSize: 20, fontWeight: 700 },
  purple: { color: "#6d28d9" },
  navLinks: { display: "flex", gap: 20, fontSize: 14, color: "#444" },
  navRight: { display: "flex", alignItems: "center", gap: 15 },
  btn: { background: "black", color: "white", padding: "10px 16px", border: "none", borderRadius: 6, cursor: "pointer" },
  hero: { textAlign: "center", padding: "60px 20px" },
  heroTitle: { fontSize: 36, fontWeight: 600 },
  plans: { display: "flex", justifyContent: "center", gap: 30, padding: "0 40px" },
  card: { background: "#f7f7f7", borderRadius: 16, padding: 24, width: 320 },
  cardTitle: { fontSize: 22, fontWeight: "bold" },
  cardText: { fontSize: 14, color: "#666" },
  featureList: { marginTop: 10, fontSize: 14 },
  addonsTitle: { textAlign: "center", marginTop: 80 },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, padding: "0 80px" },
  addonCard: { border: "1px solid #8b5cf6", borderRadius: 16, padding: 20 },
  cta: { marginTop: 80, background: "linear-gradient(90deg,#6d28d9,#9333ea)", color: "white", textAlign: "center", padding: 60 },
  footer: { background: "black", color: "white", padding: "60px 80px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }
};

const Navbar = () => (
  <div style={styles.navbar}>
    <div style={styles.navLeft}>
      <h1 style={styles.logo}>
        Axion <span style={styles.purple}>business</span>
      </h1>
      <div style={styles.navLinks}>
        <span>What we do</span>
        <span>How we do it</span>
        <span>Resources</span>
        <span>Plans</span>
        <span>AI Transformation ✨</span>
      </div>
    </div>

    <div style={styles.navRight}>
      <span>Login</span>
      <button style={styles.btn}>Get started</button>
      <div style={{ border: "1px solid #ccc", padding: "6px 10px", borderRadius: 6 }}>🌐</div>
    </div>
  </div>
);

const PlanCard = ({ title, subtitle, price, button, features }) => (
  <div style={styles.card}>
    <h2 style={styles.cardTitle}>{title}</h2>
    <p style={styles.cardText}>{subtitle}</p>
    <p style={{ margin: "10px 0", fontWeight: 600 }}>{price}</p>

    <button style={{ ...styles.btn, width: "100%", marginBottom: 15 }}>{button}</button>

    <ul style={styles.featureList}>
      {features.map((f, i) => (
        <li key={i}>✔ {f}</li>
      ))}
    </ul>
  </div>
);

const AddOnCard = ({ title, desc, points }) => (
  <div style={styles.addonCard}>
    <h3>+ {title}</h3>
    <p style={styles.cardText}>{desc}</p>
    <ul style={{ margin: "10px 0" }}>
      {points.map((p, i) => (
        <li key={i}>✔ {p}</li>
      ))}
    </ul>
    <button style={{ ...styles.btn, width: "100%" }}>Contact us</button>
  </div>
);

export default function App() {
  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.hero}>
        <p style={{ color: "gray" }}>PLANS</p>
        <h1 style={styles.heroTitle}>
          Scalable learning plans for organizations of every size
        </h1>
      </div>

      <div style={styles.plans}>
        <PlanCard
          title="Team Plan"
          subtitle="2–50 people"
          price="₹24,000 per year"
          button="Sign up"
          features={["Courses", "Certification", "Analytics"]}
        />

        <PlanCard
          title="Enterprise Plan"
          subtitle="Large org"
          price="Contact sales"
          button="Request demo"
          features={["Advanced analytics", "Custom paths", "Support"]}
        />

        <PlanCard
          title="AI Fluency"
          subtitle="AI learning"
          price="Contact sales"
          button="Contact us"
          features={["AI training", "Projects"]}
        />
      </div>

      <div style={styles.addonsTitle}>
        <h2>More ways to enhance your learning platform</h2>
      </div>

      <div style={styles.grid}>
        <AddOnCard title="Business Pro" desc="Hands-on" points={["Labs", "Workspaces"]} />
        <AddOnCard title="Premium Support" desc="Faster help" points={["Support", "Advisory"]} />
        <AddOnCard title="AI Role Play" desc="Interactive" points={["Custom", "Video"]} />
        <AddOnCard title="AI Connectors" desc="Integrations" points={["ChatGPT", "Security"]} />
      </div>

      <div style={styles.cta}>
        <h2>Get access to Multi-Language collection</h2>
        <button style={styles.btn}>Request demo</button>
      </div>

      <div style={styles.footer}>
        <div>
          <p>Udemy.com</p>
          <p>About</p>
        </div>
        <div>
          <p>Help</p>
          <p>Privacy</p>
        </div>
        <div>
          <p>Follow us</p>
        </div>
      </div>
    </div>
  );
}
