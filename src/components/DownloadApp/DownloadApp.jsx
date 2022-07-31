/** @format */

// imports
import React from "react";

// styles
import styles from "./styles.module.css";

// assets
import AppStoreIcon from "../Footer/assets/appstore.svg";
import GooglePlayIcon from "../Footer/assets/googleplay.svg";

const DownloadApp = () => {
  return (
    <div className={styles.download_app}>
      <h6>Download the App</h6>
      <div>
        <img src={AppStoreIcon} alt='app-store-icon' />
        <img src={GooglePlayIcon} alt='google-play-icon' />
      </div>
      <button> Open Web App in your Browser</button>
    </div>
  );
};

export default DownloadApp;
