/** @format */

// imports
import React from "react";

// styles
import styles from "./styles.module.css";

// assets
import OurSolutionImage from "./assets/our_solution.png";

const OurSolution = ({ solutionRef }) => {
  return (
    <div className={styles.solution} ref={solutionRef}>
      <h6>Our Solution</h6>
      <img src={OurSolutionImage} alt='our-solution' />
      <div>
        <p>
          Heart-shaped faces have a broad forehead and wide cheekbones that
          narrow down to a small chin. Lots of shapes will suit you, but your
          goal is to choose frames that will provide contrast and balance to
          your face. If you have this face shape, you should consider the
          following
        </p>
        <p>
          Heart-shaped faces have a broad forehead and wide cheekbones that
          narrow down to a small chin. Lots of shapes will suit you, but your
          goal is to choose frames that will provide contrast and balance to
          your face. If you have this face shape, you should consider the
          following
        </p>
      </div>
    </div>
  );
};

export default OurSolution;
