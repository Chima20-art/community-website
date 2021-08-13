import React from "react";
import styles from "./about.module.css";

export default function aboutUs() {
  return (
    <div className={styles.about}>
      <div className={styles.grayDiv}>
        <div className={styles.description}>
          to grow the business together
          <br />
          <b>
            {" "}
            Continous effort through
            <br /> improvement and innovation
          </b>
        </div>
        <div classname={styles.logo}>
          <img src="/logo.png" />
        </div>
      </div>
      <div className={styles.paragraph}></div>
    </div>
  );
}
