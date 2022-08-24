/** @format */

// imports
import React from "react";
import Slider from "react-slick";

// styles
import styles from "./styles.module.css";

// assets
import MillerImage from "./assets/miller.png";
import JeterImage from "./assets/jeter.png";
import JolieImage from "./assets/jolie.png";
import DiddyImage from "./assets/diddy.png";
import ValderImage from "./assets/valder.png";
import Jolie2Image from "./assets/jolie_2.png";
import SwiftImage from "./assets/swift.png";
import MayerImage from "./assets/mayer.png";

const Celebrity = ({ celebrityRef }) => {
  // slider settings
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: window.innerWidth > 1100 ? 4 : 1,
    speed: 500,
    arrows: true,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          right: "25px",
          zIndex: 10,
          background: "rgba(178, 184, 201, 0.61)",
          backdropFilter: "blur(4px)",
          borderRadius: "50%",
          height: "64px",
          width: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClick}
      >
        Hello
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          left: "25px",
          zIndex: 10,
          background: "rgba(178, 184, 201, 0.61)",
          backdropFilter: "blur(4px)",
          borderRadius: "50%",
          height: "64px",
          width: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div ref={celebrityRef} className={styles.celebrity}>
      <h6>Be like celebrity</h6>
      <div className={styles.sliders}>
        <Slider {...settings}>
          <div className={styles.slider_item}>
            <div className={styles.inner}>
              <div>
                <p>S. Miller</p>
                <img src={MillerImage} alt='s.miller' />
                <h6>diamond</h6>
              </div>
            </div>
          </div>
          <div className={styles.slider_item}>
            <div className={styles.inner}>
              <div>
                <p>D. Jeter</p>
                <img src={JeterImage} alt='d.jeter' />
                <h6>oval</h6>
              </div>
            </div>
          </div>
          <div className={styles.slider_item}>
            <div className={styles.inner}>
              <div>
                <p>A. Jolie</p>
                <img src={JolieImage} alt='a. jolie' />
                <h6>diamond</h6>
              </div>
            </div>
          </div>
          <div className={styles.slider_item}>
            <div className={styles.inner}>
              <div>
                <p>P. Diddy</p>
                <img src={DiddyImage} alt='p. diddy' />
                <h6>oval</h6>
              </div>
            </div>
          </div>
          <div className={styles.slider_item}>
            <div className={styles.inner}>
              <div>
                <p>A. Jolie</p>
                <img src={JolieImage} alt='a. jolie' />
                <h6>diamond</h6>
              </div>
            </div>
          </div>
        </Slider>
        <Slider {...settings}>
          <div className={styles.slider_item}>
            <div className={styles.inner}>
              <div>
                <p>W. Valder</p>
                <img src={ValderImage} alt='W. Valder' />
                <h6>diamond</h6>
              </div>
            </div>
          </div>
          <div className={styles.slider_item}>
            <div className={styles.inner}>
              <div>
                <p>A. Jolie</p>
                <img src={Jolie2Image} alt='A. Jolie' />
                <h6>round</h6>
              </div>
            </div>
          </div>
          <div className={styles.slider_item}>
            <div className={styles.inner}>
              <div>
                <p>T. Swift</p>
                <img src={SwiftImage} alt='T. Swift' />
                <h6>round</h6>
              </div>
            </div>
          </div>
          <div className={styles.slider_item}>
            <div className={styles.inner}>
              <div>
                <p>J. Mayer</p>
                <img src={MayerImage} alt='J. Mayer' />
                <h6>oval</h6>
              </div>
            </div>
          </div>
          <div className={styles.slider_item}>
            <div className={styles.inner}>
              <div>
                <p>A. Jolie</p>
                <img src={JolieImage} alt='a. jolie' />
                <h6>diamond</h6>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Celebrity;
