/** @format */

// imports
import React from "react";

// styles
import styles from "./styles.module.css";

const Navbar = ({
  executeHeroScroll,
  executeSolutionScroll,
  executeCelebrityScroll,
}) => {
  return (
    <div className={styles.navbar}>
      <span onClick={executeHeroScroll}>What Glasses Will Suit My Face?</span>
      <span onClick={executeSolutionScroll}>Our Solution</span>
      <span onClick={executeCelebrityScroll}>Be like celebrity</span>
    </div>
  );
};

export default Navbar;
