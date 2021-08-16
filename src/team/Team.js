import React from "react";
import styles from "./team.module.css";

export default function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.mainDiv}>
        <div className={styles.title}>
          Alone is a vision
          <br /> <b>together we make it reality</b>
        </div>
        <div className={styles.image}>
          <img src="/cuate.png" />
        </div>
        <div className={styles.redBorder} />
      </div>
      <div className={styles.management}>
        <div className={styles.manajmenTitle}>
          Manajemen
          <img src="/Line 1.png" className={styles.vector} />
        </div>
        <div className={styles.cardItems}>
          <div className={styles.cardItem} style={{ marginRight: "100px" }}>
            <div>
              <img src="/circle-box.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}>President Director</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
          <div className={styles.cardItem} style={{ marginLeft: "100px" }}>
            <div>
              <img src="/circle-box-2.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}> Director</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
