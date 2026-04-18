//THIS SHOWS THE CAREER ACCELERATOR CARDS IN THE CAREER SECTION. THE DATA FOR THE CARDS IS HARDCODED IN THIS COMPONENT.
//ON THE SCREEN THIS IS SHOWN AS THE "READY TO REIMAGINE YOUR CAREER?" SECTION.

const CareerSection = () => {
    const careers = [
        {
            title: "Cloud Engineer",
            rating: "4.7",
            students: "325K ratings",
            hours: "29.1 total hours",
            img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
            bg: "#16a34a",
        },
        {
            title: "Data Scientist",
            rating: "4.6",
            students: "226K ratings",
            hours: "47.1 total hours",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            bg: "#a855f7",
        },
        {
            title: "Digital Marketer",
            rating: "4.5",
            students: "3.9K ratings",
            hours: "28.4 total hours",
            img: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
            bg: "#7c3aed",
        },
    ];

    return (
        <div style={styles.wrapper}>

            <h2 style={styles.heading}>
                Ready to reimagine your career?
            </h2>

            <p style={styles.desc}>
                Get the skills and real-world experience employers want with Career Accelerators.
            </p>

            <div style={styles.grid}>
                {careers.map((item, i) => (
                    <div key={i} style={styles.card}>

                        <img src={item.img} style={styles.img} />

                        <h3 style={styles.title}>{item.title}</h3>

                        <div style={styles.row}>
                            <span style={styles.badge}>⭐ {item.rating}</span>
                            <span style={styles.meta}>{item.students}</span>
                            <span style={styles.meta}>{item.hours}</span>
                        </div>

                    </div>
                ))}
            </div>
            <p style={styles.bottomLink}>
                All Career Accelerators →
            </p>
        </div>
    );
};

export default CareerSection;

const styles = {
    wrapper: {
        maxWidth: "1200px",
        margin: "60px auto",
        padding: "0 20px",
    },

    heading: {
        fontSize: "28px",
        fontWeight: "700",
        marginBottom: "10px",
    },

    desc: {
        color: "#6b7280",
        marginBottom: "30px",
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
    },

    card: {
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "15px",
        background: "white",
        cursor: "pointer",
    },

    img: {
        width: "100%",
        height: "180px",
        objectFit: "cover",
        borderRadius: "12px",
        marginBottom: "10px",
    },

    title: {
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "8px",
    },

    row: {
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
    },

    badge: {
        background: "#fef3c7",
        padding: "3px 6px",
        borderRadius: "6px",
        fontSize: "12px",
        fontWeight: "600",
    },

    meta: {
        fontSize: "12px",
        color: "#6b7280",
    },

    bottomLink: {
  marginTop: "20px",
  color: "#a435f0",
  fontWeight: "600",
  cursor: "pointer",
},
};