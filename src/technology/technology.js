import React from "react";
import styles from "./technology.module.css";
import background from "./redBackground.png";

export default function technology() {
  return (
    <div className={styles.container}>
      <div className={styles.mainDiv}>
        <img src="/Group 1331-2.png" className={styles.background} />

        <div className={styles.text}>
          <p className={styles.divTitle}>
            “Knowledge” some way of future <br /> up-to-date in latest
            technology
          </p>
          <div className={styles.button}>learn More</div>
          <img src="/@ Macbook Pro.png" className={styles.macbookPic} />
        </div>
      </div>
    </div>
  );
}
