import React from "react";

const Schedule = () => {

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div style={styles.container}>
      {/* About College Section */}
      <div style={styles.infoBox}>
        <h2 style={styles.infoTitle}>About College</h2>
        <p style={styles.infoText}>
        RMDEC aspires to be a premier institution offering quality technical education and research with application expertise in Engineering and Technology. Develop the students as outstanding professionals by creating an environment that would nurture creativity, academic excellence, professionalism, high standard of ethics, sense of responsibility and respect for individuals. Provides an efficient academic and research environment.Our mission is to inspire, educate, and produce computer engineers capable of tackling fundamental scientific problems and important societal challenges - and to do so with the highest commitment to quality, integrity, and respect for others. Our students are rigorously trained in fundamentals of engineering, with a strong bent towards the maker culture of learning and doing.

        </p>
        <button style={styles.button} onClick={() => handleRedirect("https://rmd.ac.in/index.html")}>Know More</button>
      </div>

      {/* About Department Section */}
      <div style={styles.infoBox}>
        <h2 style={styles.infoTitle}>About Department</h2>
        <p style={styles.infoText}>
        Dating back to the early 21st century, B.E Computer Science and Engineering programme has a long history of excellence. It is designed to be a creative driving force at R.M.D Engineering college and worldwide, of highest scholarly and entrepreneurial quality. Our mission is to inspire, educate, and produce computer engineers capable of tackling fundamental scientific problems and important societal challenges - and to do so with the highest commitment to quality, integrity, and respect for others. Our students are rigorously trained in fundamentals of engineering, with a strong bent towards the maker culture of learning and doing. The department also focuses on giving hands-on industrial experience to the students by organizing various Center Of Excellence (COE), where the students get trained by the professionals from various firms right from third semster up until they get recruited by those firms. The various COEs available are Big Data, Cyber Security, Cloud Computing and Digital Enterprise.
        </p>
      <button style={styles.button} onClick={() => handleRedirect("https://rmd.ac.in/dept/cse/index.html")}>Know More</button>
      </div>

      {/* Schedule Section */}
      <h2 style={styles.title}>Schedule</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.cell}>Event</th>
            <th style={styles.cell}>Student Coordinator</th>
            <th style={styles.cell}>Contact</th>
            <th style={styles.cell}>Venue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.cell}>Battle of Coders</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>CSE DEPARTMENT</td>
          </tr>
          <tr>
            <td style={styles.cell}>Paper Presentation</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>CSE DEPARTMENT</td>
          </tr>
          <tr>
            <td style={styles.cell}>Shark Tank</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>CSE DEPARTMENT</td>
          </tr>
          <tr>
            <td style={styles.cell}>Pixel Playground UI</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>CSE DEPARTMENT</td>
          </tr>
          <tr>
            <td style={styles.cell}>IPL Auction</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>CSE DEPARTMENT</td>
          </tr>
          <tr>
            <td style={styles.cell}>Squid Verse</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>CSE DEPARTMENT</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    color: "white",
    textAlign: "center",
    padding: "30px",
  },
  infoBox: {
    padding: "30px",
    marginBottom: "20px",
    borderRadius: "15px",
    width: "800px",
    height: "400px", 
    marginTop: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    border: "2px solid #fff",
    borderRadius: "15px",
    alignItems: "center",   // Centers text vertically
    justifyContent: "center", // Centers text horizontally
    textAlign: "center",
    boxShadow: "0 4px 30px rgb(255, 255, 255)", 
    // Responsive adjustments
    "@media (max-width: 1200px)": {
      width: "600px",
      height: "350px",
    },
    "@media (max-width: 768px)": {
      width: "90%", // Reduce width to 90% of the parent container
      maxWidth: "600px", // Ensure it doesn't exceed 600px
      height: "300px",
    },
    "@media (max-width: 480px)": {
      width: "90%", // Reduce width to 90% of the parent container
      maxWidth: "400px", // Ensure it doesn't exceed 400px
      height: "250px",
    },
  },
  infoTitle: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  infoText: {
    fontSize: "16px",
    lineHeight: "1.5",
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "white",
    color: "black",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  buttonHover: {
    backgroundColor: "gray", // Optional hover effect
  },
  title: {
    marginTop:"80px",
    fontSize: "24px", 
    marginBottom: "20px",
  },
  table: {
    width: "80%",
    margin: "0 auto",
    borderCollapse: "collapse",
    // Responsive adjustments
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  cell: {
    border: "1px solid white",
    padding: "10px",
  },
};

export default Schedule;