import React from "react";
import styles from "./products.module.css";

export default function Product() {
  return (
    <div>
      <div className={styles.redDiv}>
        <div className={styles.title}>
          The most advanced technology always work hand-in-hand with qualified
          people
        </div>
      </div>
      <div className={styles.grayDiv}></div>

      <div className={styles.productParagraph}>
        Our product, hdfgwvflujhwjvnefbvhkef bfdhvkef kjbvfk;s
      </div>
    </div>
  );
}
