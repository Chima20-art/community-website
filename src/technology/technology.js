import React from "react";
import styles from "./technology.module.css";
import background from "./redBackground.png";

export default function technology() {
  return (
    <div className={styles.container}>
      <div className={styles.mainDiv}>
        <img src="/Group 1331-2.png" className={styles.background} />

        <div className={styles.text}>
          <p className={styles.divTitle}>
            “Knowledge” some way of future <br /> up-to-date in latest
            technology
          </p>
          <div className={styles.button}>learn More</div>
          <img src="/@ Macbook Pro.png" className={styles.macbookPic} />
        </div>
      </div>
      <div className={styles.logos}>
        <img src="/java-2.png" className={styles.logo} />
        <img src="/Group 1318.png" className={styles.logo} />
        <img src="/css_3.svg" className={styles.logo} />
        <img src="/html_5.png" className={styles.logo} />
        <img src="/microsoft.png" className={styles.logo} />
      </div>
      <div className={styles.ourTechnologyDiv}>
        <div className={styles.Title}>
          Client Line-Up
          <img src="/Line 1.png" className={styles.vector} />
          <div className={styles.technologyText}>
            <div className={styles.paragraph}>
              First JAVA, runs on more than 850 million personal computers
              worldwide, and on billions of devices worldwide, including mobile
              and TV devices.The latest Java version contains important
              enhancements to improve performance, stability and security of the
              Java applications that run on your machine. Installing this free
              update will ensure that your Java applications continue to run
              safely and efficiently. The best part of JAVA is free.
            </div>
            <div className={styles.paragraph}>
              We also use PHP for general occation, why? we think you already
              know the reason,of course because is the most flexible language on
              earth that can colaborate very well with all language.
            </div>
            <div className={styles.paragraph}>
              {" "}
              for the strusture is HTML & CSS ( who does not know ? ) cause it's
              the basic language use for the web and help us creating a very
              outstanding view. its become important cause it make our system
              looks good in front of the eyes of our client, (doesnt agree?),
              Hmm, let me ask you if you have a good software but with bad
              UI/UX, do people use it? cause for it we can reach our goals.
            </div>
            <div className={styles.paragraph}>
              What about Microsoft technology, why not. . . We always strive to
              remain the best and try to keep developing what we have.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
