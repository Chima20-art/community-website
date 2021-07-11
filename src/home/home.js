import React from "react";
import styles from "./home.module.css";

import Presentation from "./presentation/presentation";
import GrayDiv from "./grayDiv/grayDiv";
import Product from "./product and services/product";

export default function Mac() {
  return (
    <div className={styles.container}>
      <Presentation />
      <GrayDiv />
      <Product />
    </div>
  );
}
