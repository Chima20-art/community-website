import React from "react";
import styles from "./client.module.css";

export default function Client() {
  return (
    <div className={styles.container}>
      <div className={styles.mainDiv}>
        <div className={styles.title}>
          Taking our client in <br />
          more comfortable way <br />
          <b>Deliver IT around the globe</b>
        </div>
        <div className={styles.image}>
          <img src="/pana2.png" />
        </div>
      </div>
      <div className={styles.redBorder} />
    </div>
  );
}
