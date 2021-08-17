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
      <div className={styles.clientLineUpDiv}>
        <div className={styles.Title}>
          Client Line-Up
          <img src="/Line 1.png" className={styles.vector} />
        </div>
      </div>
      <div className={styles.clientCard}>
        <div className={styles.bankLogo}>
          <img src="/image 17.png" className={styles.bankLogo} />
        </div>
        <div className={styles.description}>
          <div className={styles.cardTitle}>Bank Tabungan Negara</div>
          <div className={styles.subtitle}>Project WB-Bank BTN :</div>
          <div className={styles.text}>
            <p className={styles.margin}>
              Application Development Project Teller System or known as Web
              Applications Branch for Bank BTN. Project is to replace the
              existing application at Bank BTN is running under the Windows
              platform or desktop applications into Web-based applications
              applications.
            </p>
            <p className={styles.margin}>
              Branch Web application will be implemented throughout the Bank BTN
              - Indonesia, about 600 BTN Office.
            </p>
            <p className={styles.margin}>
              Web framework: tapestry 5.3 <br /> Back end : spring 3.1 + jpa 2
              <br /> Security: apache shiro
              <br /> Database: ibm db2 9.7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
