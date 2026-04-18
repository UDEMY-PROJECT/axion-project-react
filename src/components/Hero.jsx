// Hero.jsx
import herobanner from "../assets/herobanner.jpg";
const Hero = () => {
    return (
        <div style={styles.wrapper}>
            
            <div style={styles.inner}>

                {/* LEFT CARD */}
                <div style={styles.card}>
                    <h1 style={styles.title}>
                        Champions Hote Nahi, Bante Hain
                    </h1>

                    <p style={styles.desc}>
                        Buy any course or subscription for a chance to win match tickets.
                    </p>

                    <div>
                        <button style={styles.primary}>Enter to win</button>
                        <button style={styles.secondary}>Learn more</button>
                    </div>
                </div>

                
            </div>
            
        </div>

        
    );
};

export default Hero

const styles = {
    wrapper: {
        backgroundImage: `url(${herobanner})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        height: "450px",
        position: "relative",
    },

    inner: {
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
    },

    card: {
        position: "absolute",
        top: "50%",
        left: "80px",
        transform: "translateY(-50%)",

        background: "white",
        padding: "30px",
        width: "380px",
        borderRadius: "10px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    },

    title: {
        fontSize: "28px",
        marginBottom: "10px",
    },

    desc: {
        color: "gray",
        marginBottom: "15px",
    },

    image: {
        width: "500px",
    },

    primary: {
        background: "#a435f0",
        color: "white",
        padding: "10px 18px",
        marginRight: "10px",
        border: "none",
        fontWeight: "bold",
    },

    secondary: {
        border: "1px solid #a435f0",
        padding: "10px 18px",
        background: "transparent",
        fontWeight: "bold",
    },
};