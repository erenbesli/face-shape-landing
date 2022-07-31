/** @format */

// imports
import React from "react";

// styles
import styles from "./styles.module.css";

// assets
import ResultImage from "./assets/result.png";

const Result = () => {
  return (
    <div className={styles.result}>
      <h6>Result</h6>
      <img src={ResultImage} alt='result' />
      <div>
        <p>
          Heart-shaped faces have a broad forehead and wide cheekbones that
          narrow down to a small chin. Lots of shapes will suit you, but your
          goal is to choose frames that will provide contrast and balance to
          your face.
        </p>
        <p>
          Heart-shaped faces have a broad forehead and wide cheekbones that
          narrow down to a small chin. Lots of shapes will suit you, but your
          goal is to choose frames that will provide contrast and balance to
          your face.
        </p>
      </div>
    </div>
  );
};

export default Result;
