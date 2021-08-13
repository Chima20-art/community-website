import React from "react";
import styles from "./about.module.css";

export default function aboutUs() {
  return (
    <div className={styles.about}>
      <div className={styles.grayDiv}>
        <div className={styles.description}>
          to grow the business together
          <br />
          <b>
            {" "}
            Continous effort through
            <br /> improvement and innovation
          </b>
        </div>
        <div classname={styles.logo}>
          <img src="/logo.png" />
        </div>
      </div>
      <div className={styles.paragraph}>
        <div className={styles.title}>
          About Dwidasa Samsara Indonesia (DSI)
        </div>
        <img src="/Line 1-3.png" className={styles.line} />
        <div className={styles.text}>
          <p>
            <span className={styles.redFont}>
              Dwidasa Samsara Indonesia (DSI)
            </span>
            was firstly established in 2010 by the founders, who each of them
            has a common end objective to innovate new creations by making the
            most of the ever-growing information technology through{" "}
            <span className={styles.redFont}>DSI</span>’s distinct front-end
            based application concept. Managed by a team of professional experts
            with extensive experience and impressive track records,{" "}
            <span className={styles.redFont}>DSI</span> believes that continuous
            improvements and innovations assure your business to run effectively
            and efficiently.
          </p>
          <p>
            Then from that perspective, we named our company ‘
            <span className={styles.redFont}>Dwidasa Samsara Indonesia</span>’,
            which means continuous efforts through improvement and innovation
            will help us evolving toward the forefront position in Indonesia. In
            responding to various clients’ specifi c requirements,{" "}
            <span className={styles.redFont}>DSI</span> will work consistently
            in optimizing its existing reliable resources combined with
            well-trained team supports, to present particularly the dynamic fi
            nancial industry sector with its customized solutions.
          </p>
          <p>
            Considering the complexity of the clients’ demand, however
            notwithstanding the size of the organization,{" "}
            <span className={styles.redFont}>DSI</span> is always committed to
            work effectively for growing the business together with business
            partners, through its innovative and collaborative methodology while
            assuring a fast response time to customers. That way, the final
            output is delivered in a secured and timely manner, towards the
            attainment of the most effi cient outcome.
          </p>
          <p>
            For <span className={styles.redFont}>DSI</span>, both technical and
            non-technical supports are as important as the partnership we have
            built with your business. Among others, our partnership portfolio
            has been built with various business segments such as Internet
            Service Provider (ISP), Application Service Provider (ASP) and
            Payment Network corporations. Through such partnerships, we are
            evolving together to a new height of innovative explorations and
            effective improvements with purpose to having a sustainable business
            operation cycles.
          </p>
        </div>
      </div>
    </div>
  );
}
