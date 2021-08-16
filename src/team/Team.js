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
      <div className={styles.managementDiv}>
        <div className={styles.manajmenTitle}>
          Manajemen
          <img src="/Line 1.png" className={styles.vector} />
        </div>
        <div className={styles.cardItems1}>
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
      <div className={styles.consultantDiv}>
        <div className={styles.consultantTitle}>
          Consultant
          <img src="/Line 2.png" className={styles.vector} />
        </div>
        <div className={styles.cardItems}>
          <div className={styles.cardItem} style={{ marginRight: "25px" }}>
            <div>
              <img src="/circle-box-3.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}>Project Manager</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
          <div
            className={styles.cardItem}
            style={{ marginLeft: "25px", marginRight: "25px" }}
          >
            <div>
              <img src="/circle-box-4.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}> Business Analyst</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
          <div
            className={styles.cardItem}
            style={{ marginLeft: "25px", marginRight: "25px" }}
          >
            <div>
              <img src="/circle-box-5.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}>Consultant</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
          <div className={styles.cardItem} style={{ marginLeft: "25px" }}>
            <div>
              <img src="/circle-box-6.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}> Consultant</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileDiv}>
        <div className={styles.consultantTitle}>
          Mobile Specialist
          <img src="/Line 2.png" className={styles.vector} />
        </div>
        <div className={styles.cardItems}>
          <div className={styles.cardItem} style={{ marginRight: "25px" }}>
            <div>
              <img src="/circle-box-7.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}>System Analyst</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
          <div
            className={styles.cardItem}
            style={{ marginLeft: "25px", marginRight: "25px" }}
          >
            <div>
              <img src="/circle-box-8.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}> System Analyst</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
          <div
            className={styles.cardItem}
            style={{ marginLeft: "25px", marginRight: "25px" }}
          >
            <div>
              <img src="/circle-box-9.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}>Programmer</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
          <div className={styles.cardItem} style={{ marginLeft: "25px" }}>
            <div>
              <img src="/circle-box-10.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}> Programmer</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.javaDiv}>
        <div className={styles.consultantTitle}>
          Java Specialist
          <img src="/Line 2.png" className={styles.vector} />
        </div>
        <div className={styles.cardItems}>
          <div className={styles.cardItem} style={{ marginRight: "25px" }}>
            <div>
              <img src="/circle-box-11.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}>System Analyst</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
          <div
            className={styles.cardItem}
            style={{ marginLeft: "25px", marginRight: "25px" }}
          >
            <div>
              <img src="/circle-box-12.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}> System Analyst</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
          <div
            className={styles.cardItem}
            style={{ marginLeft: "25px", marginRight: "25px" }}
          >
            <div>
              <img src="/circle-box-13.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}>Programmer</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
          <div className={styles.cardItem} style={{ marginLeft: "25px" }}>
            <div>
              <img src="/circle-box-14.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}> Programmer</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
        </div>

        <div className={styles.cardItems}>
          <div className={styles.cardItem} style={{ marginRight: "25px" }}>
            <div>
              <img src="/circle-box-15.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}>System Analyst</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
          <div
            className={styles.cardItem}
            style={{ marginLeft: "25px", marginRight: "25px" }}
          >
            <div>
              <img src="/circle-box-16.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}> System Analyst</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
          <div
            className={styles.cardItem}
            style={{ marginLeft: "25px", marginRight: "25px" }}
          >
            <div>
              <img src="/circle-box-17.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}>Programmer</div>
            <div className={styles.name}>Rodney Stratton</div>
            <div className={styles.media}>
              <img className={styles.facebook} src="/Facebook.png" />
              <img className={styles.tweeter} src="/Twitter.png" />
              <img className={styles.instagram} src="/Instagram.png" />
            </div>
          </div>
          <div className={styles.cardItem} style={{ marginLeft: "25px" }}>
            <div>
              <img src="/circle-box-18.png" className={styles.picture} />
            </div>
            <div className={styles.cardTitle}> Programmer</div>
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
