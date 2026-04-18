
//THESE ARE COURSE CARDS IN THE "LEARN AI WITH GOOGLE" SECTION(THE BIG GREEN-TEAL COLORED SECTION). 
// THE DATA FOR THESE CARDS IS HARDCODED IN THIS COMPONENT.

import { useRef } from "react";

const Featured = () => {
    const scrollRef = useRef();

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 250,
            behavior: "smooth",
        });
    };

    // ✅ NEW COURSE DATA
    const courses = [
        {
            title: "AI Fundamentals",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
            duration: "1.2 hours",
        },
        {
            title: "AI for Brainstorming and Planning",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQgdMqBVLd0bfPLMrVpG_lR9yyHk2eu_5daA&s",
            duration: "21 mins",
        },
        {
            title: "AI for Research and Insights",
            image: "https://media.licdn.com/dms/image/v2/D5612AQHDu73xHfqm0g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1705538078120?e=2147483647&v=beta&t=MW1wQ8xTvl8nyR7d73oqN3dutgrZw_hn-GRYecexeq0",
            duration: "31 mins",
        },
        {
            title: "AI for Writing and Communication",
            image: "https://framerusercontent.com/images/3WJHjDd67EoRo8mYwfdFPmzwLJo.png?width=1600&height=1018",
            duration: "29 mins",
        },
    ];

    return (
        <div style={styles.wrapper}>
            <h2 style={styles.heading}>Learn AI with Google</h2>

            <div style={styles.container}>

                {/* LEFT CARD */}
                <div style={styles.leftCard}>
                    <h3 style={{ color: "#4285F4" }}>Google</h3>
                    <h2 style={{ fontSize: "22px", margin: "10px 0" }}>
                        Google AI Professional Certificate
                    </h2>
                    <p style={{ color: "#444" }}>
                        Build your AI fluency and get more done, faster.
                    </p>

                    <div style={styles.badgeRow}>
                        <span style={styles.badgeBox}>⭐ 4.6</span>
                        <span style={styles.badgeBox}>1,024 ratings</span>
                        <span style={styles.badgeBox}>5 total hours</span>
                        <span style={styles.badgeBox}>4 courses</span>
                    </div>

                    <button style={styles.learnBtn}>Learn more</button>
                </div>

                {/* RIGHT SCROLL CARDS */}
                <div style={styles.coursesContainer}>
                    <div style={styles.courses} ref={scrollRef}>

                        {courses.map((course, i) => (
                            <div key={i} style={styles.card}>

                                <img src={course.image} style={styles.img} />

                                <p style={styles.creator}>Created by Google</p>

                                <p style={styles.title}>{course.title}</p>

                                <div style={styles.metaRow}>
                                    <span style={styles.meta}>Course {i + 1} of 4</span>
                                    <span style={styles.meta}>{course.duration}</span>
                                </div>

                            </div>
                        ))}

                    </div>

                    <button style={styles.arrow} onClick={scrollRight}>
                        →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;

const styles = {
    wrapper: {
        maxWidth: "1400px",
        margin: "40px auto",
        padding: "0 20px",
    },

    heading: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
    },

    container: {
        position: "relative",
        background: "#0f4c4c",
        padding: "30px",
        borderRadius: "15px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
    },

    leftCard: {
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "320px",
    },

    learnBtn: {
        marginTop: "20px",
        padding: "12px",
        border: "1px solid #a435f0",
        background: "transparent",
        width: "100%",
        fontWeight: "bold",
        cursor: "pointer",
    },

    coursesContainer: {
        overflow: "hidden",
        flex: 1,
    },

    courses: {
        display: "flex",
        gap: "15px",
        overflowX: "auto",
        scrollbarWidth: "none",
    },

    card: {
        background: "white",
        padding: "12px",
        borderRadius: "10px",
        minWidth: "220px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },

    img: {
        width: "100%",
        height: "120px",
        objectFit: "cover",
        borderRadius: "8px",
    },

    creator: {
        fontSize: "12px",
        color: "#6b7280",
    },

    title: {
        fontSize: "15px",
        fontWeight: "600",
    },

    metaRow: {
        display: "flex",
        gap: "8px",
    },

    meta: {
        fontSize: "12px",
        background: "#f3f4f6",
        padding: "4px 8px",
        borderRadius: "6px",
    },

    arrow: {
        position: "absolute",
        right: "10px",
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

    badgeRow: {
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        marginTop: "10px",
    },

    badgeBox: {
        fontSize: "12px",
        background: "#f3f4f6",
        padding: "6px 10px",
        borderRadius: "6px",
    },
};