import React from "react";
import styles from "./technology.module.css";
import background from "./redBackground.png";

export default function technology() {
  return (
    <div className={styles.container}>
      <div style={{ backgroundImage: 'url("/red-vector.png")' }}>
        <p className={styles.text}>
          “Knowledge” some way of future up-to-date in latest technology
        </p>
      </div>
    </div>
  );
}
