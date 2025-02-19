import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import Welcome from '../components/Welcome';
import Themes from '../components/Themes';
import RegisterCard from '../components/RegisterCard';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <>
      <HeroSection />

      <div style={styles.imageContainer}>
        <img
          src="/squid3.png"
          alt="Background"
          style={styles.image}
        />
      </div>
      <Welcome /> 
      <CountdownTimer />
      <Themes />
      <RegisterCard />
    </>
  );
};

const styles = {
  imageContainer: {
    position: "relative", 
    zIndex: 10,
    width: "100%",
    height: "45rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // Responsive adjustments
    "@media (max-width: 768px)": {
      height: "30rem",
    },
    "@media (max-width: 480px)": {
      height: "20rem",
    },
  },
  image: {
    width: "100%", // Adjust width
    maxHeight: "43rem",
    objectFit: "cover",
    // Responsive adjustments
    "@media (max-width: 768px)": {
      maxHeight: "28rem",
    },
    "@media (max-width: 480px)": {
      maxHeight: "18rem",
    },
  },
};

export default Home;
