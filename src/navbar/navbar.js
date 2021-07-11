import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.navBar}>
        <div>
          <Link to="/">
            <div className={styles.logo}>
              <div className={styles.image}>
                <img src="DSI.png"></img>
              </div>
              <div className={styles.description}>
                <div className={styles.text1}>DWIDASA</div>
                <div className={styles.text2}>SAMSARA</div>
                <div className={styles.text3}>INDONESIA</div>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.menu}>
          <div className={styles.buttons}>
            <Link to="/S">
              {" "}
              <div className={styles.item}>Services</div>
            </Link>
            <Link to="/products">
              <div className={styles.item}>Products</div>
            </Link>

            <div className={styles.item}> Technology</div>
            <div className={styles.dropDown}>
              <div className={styles.dropDownItem}>
                <div>About</div>
                <div>
                  <img className={styles.chevron} src="/chevron_down.png"></img>
                </div>
              </div>
              <div className={styles.popup}>
                <div className={styles.div}>link1</div>
                <div className={styles.div}>link2</div>
              </div>
            </div>
            <div className={styles.dropDown}>
              <div className={styles.dropDownItem}>
                <div>Client</div>
                <div>
                  <img className={styles.chevron} src="/chevron_down.png"></img>
                </div>
              </div>
              <div className={styles.popup}>
                <div className={styles.div}>link 3</div>
                <div className={styles.div}>link 4</div>
              </div>
            </div>
            <div className={styles.item}> Partner</div>
          </div>
          <div className={styles.media}>
            <div>
              <img className={styles.home} src="/Union.png"></img>
            </div>
            <div>
              <img className={styles.mail} src="/mail.png"></img>
            </div>
            <div>
              <img className={styles.shuffle} src="/shuffle.png"></img>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
