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
        <div>
          <img src="/logo.png" className={styles.logo} />
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
      <div className={styles.futurePrespective}>
        <div className={styles.videoImage}>
          <img src="/col-md-8.png" />
        </div>
        <div className={styles.ourFutureParagraph}>
          <div className={styles.ourFutureTitle}>
            Our Future Prespective
            <img src="/Line 2.png" className={styles.line2} />
          </div>
          <div className={styles.vision}>
            <div className={styles.visionLogo}>
              <img src="/icn settings .icn-md.png" />
            </div>

            <div className={styles.visionText}>
              <div className={styles.visionTitle}>Vision</div>
              <div className={styles.Text}>
                To become the leading application service provider (ASP)
                focusing on front-end application delivered for Indonesia’s
                banking and fi nancial industry.
              </div>
            </div>
          </div>
          <div className={styles.mission}>
            <div className={styles.visionLogo}>
              <img src="/clock.png" />
            </div>

            <div className={styles.visionText}>
              <div className={styles.visionTitle}>Mission</div>
              <div className={styles.Text}>
                To become the leading application service provider (ASP)
                focusing on front-end application delivered for Indonesia’s
                banking and fi nancial industry.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dsiCulture}>
        <div className={styles.cultureParagraph}>
          <div className={styles.cultureTitle}>
            DSI Culture
            <img src="/Line 2-2.png" className={styles.line22} />
          </div>
          <div className={styles.cultureText}>
            <p>
              Our commitment to innovation depends on everyone being comfortable
              sharing ideas and opinions. Every employee is a hands-on
              contributor, and everyone wears several hats. Because we believe
              that each DSI employee is an equally important part of our
              success.
            </p>
            <p>
              We deeply understand that the average working person spends at
              least eight hours or even more, so we spend one third even half of
              our lives to work in a day. therefore we strive to provide a fun
              and positive environment in addition to a wide range of benefits
              to provide safety so they can enjoy working at Dwidasa Samsara
              Indonesia.
            </p>
          </div>
        </div>
        <div className={styles.cultureVideo}>
          <img src="/col-md-8-2.png" />
        </div>
      </div>
      <div className={styles.whiteDiv}>
        <div className={styles.contactTitle}>
          Contact Us
          <img src="/Line 3.png" className={styles.line3} />
        </div>
        <div className={styles.mapDiv}>
          <div className={styles.map}>
            <img src="/@ map screen.png" />
          </div>
          <div className={styles.mapText}>
            <div className={styles.smallDiv}>
              <div className={styles.smallLogo}>
                <img src="/Group 1323.png" />
              </div>
              <div className={styles.descriptionLogo}>
                <div className={styles.titleLogo}>Alamat</div>
                <div className={styles.textLogo}>
                  Jl. Halim Perdana Kusuma, Ring Road Bangkalan, Madura, Jawa
                  Timur.
                </div>
              </div>
            </div>
            <div className={styles.smallDiv}>
              <div className={styles.smallLogo}>
                <img src="/Group 1319.png" />
              </div>
              <div className={styles.descriptionLogo}>
                <div className={styles.titleLogo}>Email</div>
                <div className={styles.textLogo}>sekolahku@sch.id</div>
              </div>
            </div>
            <div className={styles.smallDiv}>
              <div className={styles.smallLogo}>
                <img src="/Group 1321.png" />
              </div>
              <div className={styles.descriptionLogo}>
                <div className={styles.titleLogo}>Telepon</div>
                <div className={styles.textLogo}>(031) 3092223</div>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}
