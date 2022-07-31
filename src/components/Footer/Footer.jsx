/** @format */

// imports
import React from "react";

// styles
import styles from "./styles.module.css";

// assets
import FacebookIcon from "./assets/facebook.svg";
import InstagramIcon from "./assets/instagram.svg";
import YoutubeIcon from "./assets/youtube.svg";
import TwitterIcon from "./assets/twitter.svg";
import AppStoreIcon from "./assets/appstore.svg";
import GooglePlayIcon from "./assets/googleplay.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social_icons}>
        <img src={FacebookIcon} alt='facebook-icon' />
        <img src={InstagramIcon} alt='instagram-icon' />
        <img src={YoutubeIcon} alt='youtube-icon' />
        <img src={TwitterIcon} alt='twitter-icon' />
      </div>
      <div className={styles.call_section}>
        <h6>Call:</h6>
        <a href='tel:8002112105' target='_blank' rel='noreferrer'>
          (800) 211-2105
        </a>
      </div>
      <div className={styles.call_section}>
        <h6>E-mail:</h6>
        <a
          href='mailto:service@zennioptical.com'
          target='_blank'
          rel='noreferrer'
        >
          service@zennioptical.com
        </a>
      </div>
      <div className={styles.call_section}>
        <h6>Download applications</h6>
        <div>
          <img src={AppStoreIcon} alt='app-store-icon' />
          <img src={GooglePlayIcon} alt='google-play-icon' />
        </div>
        <button> Open Web App in your Browser</button>
      </div>
      <div className={styles.privacy_policy}>
        <span>Privacy policy\rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
