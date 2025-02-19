import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid} className="grid">
          {/* Column 1: College Info */}
          <div>
            <h4 style={styles.heading}>R.M.D. Engineering College</h4>
            <p style={styles.text}>RSM Nagar, Kavaraipettai, Tamil Nadu 601206</p>
            <p style={styles.text}>📞 044-67919191 ext:129</p>
          </div>

          {/* Column 2: Social Media */}
          <div>
            <h4 style={styles.heading}>Follow Us On</h4>
            <a
              href="https://www.instagram.com/rendezvous2k25?igsh=MTdzazZiY25tbHBuNg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Instagram.png" alt="Instagram" style={styles.icon} />
            </a>
            <h4 style={styles.heading}>Contact Us On</h4>
            <div style={styles.snippet}>
              <img src="/th.jpeg" alt="Email Id : " style={styles.mail} />
              <p style={styles.text}>rendezvous@rmd.ac.in</p>
            </div>
          </div>

          {/* Column 3: HOD & Faculty */}
          <div>
            <h4 style={styles.heading}>Head of the Department - CSE</h4>
            <p style={styles.text}>Dr.P.EZHUMALAI</p>

            <h4 style={styles.subheading}>Faculty Coordinators</h4>
            <p style={styles.text}>Dr.A. GNANASEKAR</p>

            <h4 style={styles.subheading}>Student Committee</h4>
            <p style={styles.text}>SASI KARAN - 9150581968</p>
            <p style={styles.text}>CHRISTOPHER - 9710815558</p>
            <p style={styles.text}>SIDDARTH - 9677961130</p>
            <p style={styles.text}>PRIYADHARSHINI - 9150199282</p>
          </div>

          {/* Column 4: Google Maps */}
          <div>
            <h4 style={styles.heading}>Locate Us</h4>
            <div style={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8584327876106!2d80.13819837512953!3d13.359077486993057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807d6e1207f9%3A0x2beed88a75a3fe40!2sR.M.D.%20Engineering%20college!5e0!3m2!1sen!2sin!4v1739512604672!5m2!1sen!2sin"
                style={styles.map}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .grid {
              grid-template-columns: repeat(2, 1fr) !important; /* 2 columns per row */
            }
          }

          @media (max-width: 480px) {
            .grid {
              grid-template-columns: repeat(1, 1fr) !important; /* 1 column per row */
            }
          }
        `}
      </style>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "2rem 0",
    position: "relative",
    zIndex: 10,
  },
  container: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // Default: 4 columns
    gap: "1rem",
    alignItems: "flex-start",
  },
  heading: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  subheading: {
    fontSize: "1rem",
    fontWeight: "600",
    marginTop: "1rem",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "0.9rem",
    color: "#ccc",
    marginBottom: "0.5rem",
  },
  icon: {
    width: "1.25rem",
    height: "1.25rem",
    transition: "opacity 0.3s",
    cursor: "pointer",
  },
  mail: {
    width: "1.25rem",
    height: "1rem",
    transition: "opacity 0.3s",
    cursor: "pointer",
  },
  snippet: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  mapContainer: {
    width: "100%",
    height: "12.5rem",
    borderRadius: "0.5rem",
    overflow: "hidden",
    boxShadow: "0px 2px 10px rgba(255, 255, 255, 0.1)",
  },
  map: {
    width: "100%",
    height: "100%",
    border: "none",
  },
};

export default Footer;