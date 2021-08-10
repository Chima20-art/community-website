import React from "react";
import styles from "./products.module.css";

export default function Product() {
  return (
    <div>
      <div className={styles.redDiv}>
        <div className={styles.title}>
          The most advanced technology always
          <b> work hand-in-hand with qualified people</b>
        </div>
      </div>
      <div className={styles.grayDiv}></div>

      <div className={styles.productParagraph}>
        <div className={styles.text}>
          <div className={styles.ourProductTitle}>
            <div> Our Product</div>
            <img src="/Line 1-2.png" />
          </div>

          <div className={styles.paragraph}>
            <p>
              Our product is made on the base of our team’s careful research and
              analyses, ranging from internet based application such as Internet
              Banking; mobile frontend application such as Mobile Banking;
              transaction based banking such as EDC Banking; and other financial
              platforms such as Personal Investment Portfolio.
            </p>
            <p>
              Our product and service range will technically safeguard your
              business operations through continued application development. It
              is all topped with our integrated procedure made in accordance
              with the industry’s best practices, which will drive the built-in
              system towards the creation of secured and value added services
              for you as business partners.
            </p>
          </div>
        </div>
        <img src="/computer.png" className={styles.computer} />
      </div>
    </div>
  );
}
