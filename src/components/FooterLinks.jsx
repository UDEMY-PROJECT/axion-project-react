//THE SECTION AT THE END WITH A LOT OF LINKS TO COURSES AND CERTIFICATIONS.
//THE DATA FOR THE LINKS IS HARDCODED IN THIS COMPONENT.
const FooterLinks = () => {
  const sections = [
    {
      title: "In-demand Careers",
      items: [
        "Data Scientist",
        "Full Stack Web Developer",
        "Cloud Engineer",
        "Project Manager",
        "Game Developer",
        "All Career Accelerators",
      ],
    },
    {
      title: "Web Development",
      items: ["Web Development", "JavaScript", "React JS", "Angular", "Java"],
    },
    {
      title: "IT Certifications",
      items: [
        "Amazon AWS",
        "AWS Certified Cloud Practitioner",
        "AZ-900: Microsoft Azure Fundamentals",
        "AWS Certified Solutions Architect",
        "Kubernetes",
      ],
    },
    {
      title: "Leadership",
      items: [
        "Leadership",
        "Management Skills",
        "Project Management",
        "Personal Productivity",
        "Emotional Intelligence",
      ],
    },
    {
      title: "Certifications by Skill",
      items: [
        "Cybersecurity Certification",
        "Project Management Certification",
        "Cloud Certification",
        "Data Analytics Certification",
        "HR Management Certification",
        "See all Certifications",
      ],
    },
    {
      title: "Data Science",
      items: [
        "Data Science",
        "Python",
        "Machine Learning",
        "ChatGPT",
        "Deep Learning",
      ],
    },
    {
      title: "Communication",
      items: [
        "Communication Skills",
        "Presentation Skills",
        "Public Speaking",
        "Writing",
        "PowerPoint",
      ],
    },
    {
      title: "Business Analytics & Intelligence",
      items: [
        "Microsoft Excel",
        "SQL",
        "Microsoft Power BI",
        "Data Analysis",
        "Business Analysis",
      ],
    },
  ];

  return (
    <div style={styles.wrapper}>

      <h3 style={styles.heading}>
        Explore top skills and certifications
      </h3>

      <div style={styles.grid}>
        {sections.map((section, index) => (
          <div key={index}>
            <h4 style={styles.title}>{section.title}</h4>

            {section.items.map((item, i) => (
              <p key={i} style={styles.item}>
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
};

export default FooterLinks;

const styles = {
  wrapper: {
    background: "#1c1d1f",
    color: "white",
    padding: "50px 40px",
  },

  heading: {
    fontSize: "18px",
    marginBottom: "30px",
    fontWeight: "600",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "40px",
  },

  title: {
    fontSize: "14px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  item: {
    fontSize: "13px",
    color: "#d1d5db",
    marginBottom: "8px",
    cursor: "pointer",
  },
};