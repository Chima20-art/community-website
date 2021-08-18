import React from "react";
import styles from "./partner.module.css";

export default function Partner() {
  return (
    <div className={styles.partner}>
      <div className={styles.mainDiv}>
        <img src="/Group.png" className={styles.group} />

        <div className={styles.text}>
          <div className={styles.firstDiv}>
            Together we are strong,
            <br /> <b>One-stop solution for all banking needs</b>
          </div>
          <div className={styles.secondDiv}>
            Dwidasa Samsara Indonesia is a joint collaboration with several
            parties that has a good <br />
            reputation as a business partner, so that we can be the first choice
            as a “one stop <br /> solution” for all banking services provider.
          </div>
        </div>

        <img src="/Group-2.png" className={styles.group2} />
      </div>
    </div>
  );
}
