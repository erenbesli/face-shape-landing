/** @format */

// imports
import React from "react";

// styles
import styles from "./styles.module.css";

// assets
import HeroOneImg from "./assets/hero-one.svg";
import HeroTwoImg from "./assets/hero-two.svg";
import HeroThreeImg from "./assets/hero-three.svg";
import HeroFourImg from "./assets/hero-four.svg";

const Hero = ({ heroRef }) => {
  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={styles.first_content}>
        <div>
          <span>What Glasses</span>
          <br />
          <span className={styles.text_center}>Will Suit</span>
          <br />
          <span>My Face</span>
        </div>

        <p>
          Finding a flattering pair of glasses is easy if you know your face
          shape. Simply select your face shape below to see our recommendations
          for complementary frames
        </p>
        <button>Open Web App</button>
      </div>
      <div className={styles.last_content}>
        <span>
          <img src={HeroOneImg} alt='hero-one-img' />
        </span>
        <span>
          <img src={HeroTwoImg} alt='hero-two-img' />
        </span>
        <span>
          <img src={HeroThreeImg} alt='hero-three-img' />
        </span>
        <span>
          <img src={HeroFourImg} alt='hero-four-img' />
        </span>
      </div>
    </div>
  );
};

export default Hero;
