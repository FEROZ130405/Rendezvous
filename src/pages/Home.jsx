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
    height: "100%",
    height: "45rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%", // Adjust width
    maxHeight: "43rem",
    objectFit: "cover",
  },
};

export default Home;
