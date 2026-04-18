//THIS IS THE BIG BLACK BOX SECTION PROMOTING AI COURSES WITH THE MAN'S PICTURE ON IT. 


import aisectionimage from "../assets/aisectionimg.webp";

const AiSection = () => {
    return (
        <div style={styles.wrapper}>

            <div style={styles.container}>

                {/* LEFT SIDE */}
                <div style={styles.left}>
                    <h2>Reimagine your career in the AI era</h2>

                    <p style={styles.desc}>
                        Future-proof your skills with Personal Plan. Get access to a variety
                        of fresh content from real-world experts.
                    </p>

                    <div style={styles.points}>
                        <p>✨ Learn AI and more</p>
                        <p>🧠 Practice with AI coaching</p>
                        <p>🏆 Prep for a certification</p>
                        <p>📈 Advance your career</p>
                    </div>

                    <button style={styles.button}>Learn more</button>

                    <p style={styles.price}>Starting at ₹500/month</p>
                </div>

                <div style={styles.right}>
                    <img src={aisectionimage} style={styles.bigImage} />
                </div>

            </div>

        </div>
    );
};

export default AiSection;

const styles = {
    wrapper: {
        maxWidth: "1300px",
        margin: "50px auto",
    },

    container: {
        background: "#1c1d2e",
        borderRadius: "20px",
          padding: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        
    },

    left: {
        maxWidth: "600px",
    },

    desc: {
        margin: "15px 0",
        color: "#ccc",
    },

    points: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
        marginBottom: "20px",
    },

    button: {
        background: "white",
        color: "black",
        padding: "10px 20px",
        border: "none",
        borderRadius: "6px",
        fontWeight: "bold",
    },

    price: {
        marginTop: "10px",
        fontSize: "14px",
        color: "#aaa",
    },

    right: {
        display: "flex",
        gap: "15px",
    },

    img: {
        width: "150px",
        borderRadius: "12px",
    },

    bigImage: {
  width: "650px",
  maxWidth: "100%",
},
};