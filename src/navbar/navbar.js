import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import { useState } from "react";

export default function Navbar(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(true);
  const [showClientMenu, setShowClientMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  return (
    <nav className={styles.container}>
      <div className={styles.navBar}>
        <div
          onClick={() => {
            setShowMobileMenu(false);
          }}
        >
          <Link to="/">
            <div className={styles.logo}>
              <div className={styles.image}>
                <img src="DSI.png" />
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
            <Link to="/services">
              {" "}
              <div className={styles.item}>Services</div>
            </Link>
            <Link to="/product">
              <div className={styles.item}>Product</div>
            </Link>
            <Link to="/technology">
              <div className={styles.item}>Technology</div>
            </Link>
            <div className={styles.dropDown}>
              <div className={styles.dropDownItem}>
                <div>About</div>
                <div>
                  <img className={styles.chevron} src="/chevron_down.png"></img>
                </div>
              </div>
              <div className={styles.popup}>
                <Link to="/aboutUs">
                  <div className={styles.div}>Contact us</div>
                </Link>
                <Link to="/team">
                  <div className={styles.div}>Team</div>
                </Link>
              </div>
            </div>
            <Link to="/client">
              <div className={styles.item}>
                <div>Client</div>
              </div>
            </Link>
            <Link to="partner">
              <div className={styles.item}> Partner</div>
            </Link>
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
        <div
          className={styles.menuImage}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <img src="/text_align_right.png" />
        </div>
      </div>
      {showMobileMenu && (
        <div className={styles.menuItems}>
          <Link to="/services">
            <div
              className={styles.menuItem}
              onClick={() => setShowMobileMenu(false)}
            >
              Services
            </div>
          </Link>
          <Link to="/product">
            <div
              className={styles.menuItem}
              onClick={() => setShowMobileMenu(false)}
            >
              Products
            </div>
          </Link>
          <Link to="/technology">
            <div
              className={styles.menuItem}
              onClick={() => setShowMobileMenu(false)}
            >
              Technology
            </div>
          </Link>

          <div className={styles.menuItem}>
            <div
              className={styles.dropDownItemMenu}
              onClick={() => {
                setShowAboutMenu(!showAboutMenu);
              }}
            >
              <div>About</div>
              <div>
                <img className={styles.chevron} src="/chevron_down.png" />
              </div>
            </div>
            <div
              className={styles.smallMenu}
              style={{
                display: showAboutMenu ? "unset" : "none",
              }}
            >
              <Link to="/aboutUs">
                <div
                  className={styles.smallMenuItem}
                  onClick={() => setShowMobileMenu(false)}
                >
                  Contact Us
                </div>
              </Link>
              <Link to="/team">
                <div
                  className={styles.smallMenuItem}
                  onClick={() => setShowMobileMenu(false)}
                >
                  link 4
                </div>
              </Link>
            </div>
          </div>
          <div
            className={styles.menuItem}
            onClick={() => setShowClientMenu(!showClientMenu)}
          >
            <div className={styles.dropDownItemMenu}>
              <div>Clientguklghlu</div>
              <div>
                <img className={styles.chevron} src="/chevron_down.png"></img>
              </div>
            </div>
            <div
              className={styles.popup}
              style={{ display: showClientMenu ? "unset" : "none" }}
            >
              <div className={styles.div}>link 3</div>
              <div className={styles.div}>link 4</div>
            </div>
          </div>
          <div className={styles.menuItem}>Partner</div>

          <div className={styles.menuItem}>
            <div className={styles.contactItemMenu}>
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
      )}
    </nav>
  );
}
