/** @format */

// imports
import React from "react";

// styles
import styles from "./styles.module.css";

// assets
import ScanImage from "./assets/scan.png";

const Scan = () => {
  return (
    <div className={styles.scan}>
      <img src={ScanImage} alt='scan' />
      <div>
        <h6>Scan</h6>
        <p>
          A square face has a broad, deep forehead, wide jaw line and square
          chin.
        </p>
      </div>
    </div>
  );
};

export default Scan;
