import React from "react";
import styles from "./technology.module.css";

export default function technology() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundDiv}>
        <img src="/red-vector.png" className={styles.redBackground} />
        <img src="/gray-vector.png" className={styles.grayBackground} />
      </div>
    </div>
  );
}
