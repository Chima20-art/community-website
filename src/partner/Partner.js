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
      <div className={styles.partnersLineUpDiv}>
        <div className={styles.Title}>
          Client Line-Up
          <img src="/Line 1.png" className={styles.vector} />
        </div>
        <div className={styles.partnersCards}>
          <img src="/Side Shape.svg" />
          <div className={styles.partnersCard}>
            <img src="/image 19.png" className={styles.cardLogo} />
            <div className={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui quis
              volutpat venenatis bibendum hendrerit pulvinar. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Dui quis volutpat venenatis
              bibendum hendrerit pulvinar.
            </div>
          </div>
          <div className={styles.partnersCard}>
            <img src="/image 20.png" className={styles.cardLogo} />
            <div className={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui quis
              volutpat venenatis bibendum hendrerit pulvinar. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Dui quis volutpat venenatis
              bibendum hendrerit pulvinar.
            </div>
          </div>
          <div className={styles.partnersCard}>
            <img src="/image 21.png" className={styles.cardLogo3} />
            <div className={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui quis
              volutpat venenatis bibendum hendrerit pulvinar. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Dui quis volutpat venenatis
              bibendum hendrerit pulvinar.
            </div>
          </div>
          <img src="/Side Shape Circle.svg" />
        </div>
      </div>
    </div>
  );
}
