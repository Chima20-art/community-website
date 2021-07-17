import React from "react";
import styles from "./services.module.css";

export default function services() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/Background.png" className={styles.border} />
        <img src="/grayBackground.png" className={styles.grayBackground} />
        <div className={styles.quote}>
          Just a smile away from <br />
          <span className={styles.color}>
            Winning your customer’s <br />
            trust
          </span>
        </div>
      </div>

      <div className={styles.ourService}>
        <div className={styles.description}>
          <div className={styles.paragraph}>
            <div className={styles.title}>
              <div className={styles.text}>Our services</div>
              <img src="/Line 1.png" />
            </div>
            <p>
              DSI’s shared service solutions focus on the front-end based
              software development, designed specifically for the banking and
              financial sectors. We short-cut your front-liners to customers
              interaction process through a way that mediates your business
              process in a more direct communication means, in just a smile away
              from winning your customer’s trust.
            </p>
            <p>
              Through close partnership, we always work together with your team,
              all throughout from pretopost project cycles – initial planning,
              project development, implementation, evaluation up to reporting
              documentation – to fully coach you so that all your specific
              business.
            </p>
            <p>
              requirements can be delivered at the right time to the right
              audience of particular interests. Moreover, our team will support
              you to provide a detailed consultation throughout operation stage,
              and after the project implementation cycles by applying specific
              monitoring and improvement methodology. Our experienced people
              will drive your personalized service, by utilizing the best
              technology supports no other businesses can provide.
            </p>
          </div>
        </div>

        <div className={styles.chatImage}>
          <img src="/pana.png" />
        </div>
      </div>
    </div>
  );
}
