import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import styles from "./slider.module.css";

const SimpleSlider = () => (
  <Carousel plugins={["arrows"]}>
    <div className={styles.section}>
      <img src="/Mark.png" className={styles.sectionImage} />
      <div className={styles.description}>
        <img src="/quote icon.png" className={styles.quote} />
        <p className={styles.paragraph}>
          Est tation latine aliquip id, mea ad tale illud definitiones.
          Periculis omittantur necessitatibus eum ad, pro eripuit minimum
          comprehensam ne, usu cu stet prompta reformidans.
        </p>
        <p className={styles.signature}>Connie Robertson at Google</p>
      </div>
    </div>
    <div className={styles.section}>
      <img src="/Mark.png" />
      <div className={styles.description}>
        <img src="/quote icon.png" className={styles.quote} />
        <p className={styles.paragraph}>
          Est tation latine aliquip id, mea ad tale illud definitiones.
          Periculis omittantur necessitatibus eum ad, pro eripuit minimum
          comprehensam ne, usu cu stet prompta reformidans.
        </p>
        <p className={styles.signature}>Connie Robertson at Google</p>
      </div>
    </div>
    <div className={styles.section}>
      <img src="/Mark.png" />
      <div className={styles.description}>
        <img src="/quote icon.png" className={styles.quote} />
        <p className={styles.paragraph}>
          Est tation latine aliquip id, mea ad tale illud definitiones.
          Periculis omittantur necessitatibus eum ad, pro eripuit minimum
          comprehensam ne, usu cu stet prompta reformidans.
        </p>
        <p className={styles.signature}>Connie Robertson at Google</p>
      </div>
    </div>
  </Carousel>
);

export default SimpleSlider;
