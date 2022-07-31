/** @format */

// imports
import React from "react";

// styles
import styles from "./styles.module.css";

const Celebrity = ({ celebrityRef }) => {
  return (
    <div ref={celebrityRef} className={styles.celebrity}>
      <h6>Be like celebrity</h6>
    </div>
  );
};

export default Celebrity;
