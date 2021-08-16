import React from "react";
import styles from "./team.module.css";

export default function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.mainDiv}>
        <div className={styles.title}>
          Alone is a vision
          <br /> <b>together we make it reality</b>
        </div>
        <div className={styles.image}>
          <img src="/cuate.png" />
        </div>
        <div className={styles.redBorder}></div>
      </div>
    </div>
  );
}
