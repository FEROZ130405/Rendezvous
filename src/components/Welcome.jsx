import React from "react";

const Welcome = () => {
  return (
    <div style={styles.container}>
      <p style={styles.description}>Organized by</p>
      <h1 style={styles.title} className="glow">Department of Computer Science and Engineering</h1>
      <p style={styles.description}>
        Welcome to Rendezvous 2K25, a National Level Symposium where innovation meets inspiration! Join us for a fusion of technical excitement and non-technical excitement, presented by the R.M.D Engineering College Department of Computer Science and Engineering.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    color: "white",
    padding: "3.2rem",
    zIndex: "1",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "0 0 20px rgb(255, 255, 255)",
    // Responsive adjustments
    "@media (max-width: 768px)": {
      fontSize: "3rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "2rem",
    },
  },
  description: {
    marginTop: "2.5rem",
    fontSize: "1.3rem",
    maxWidth: "60rem",
    margin: "0 auto",
    // Responsive adjustments
    "@media (max-width: 768px)": {
      fontSize: "1.1rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "1rem",
    },
  },
};

export default Welcome;
