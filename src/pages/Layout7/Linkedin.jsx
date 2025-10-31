// LinkedInSection.jsx
import React from "react";
import styles from "./LinkedInSection.module.css";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import linkedinImg from "../../assets/images/Mobile.png";

export default function LinkedInSection() {
  return (
    <section className={styles.section} data-aos="fade-up" data-aos-delay="100">
      <div className={`container ${styles.container}`}>
        <div className={`row g-0 align-items-center ${styles.row}`}>



<div  className={`col-md-5`}>

  <div className={styles.mobileImage}>
  <img
    src={linkedinImg}  
    alt="LinkedIn"
    className={styles.linkedinIcon}
  />
</div>
</div>



          {/* <div
            className={`col-md-3 d-flex justify-content-center ${styles.left}`}
          >
            


            <div className={styles.linkedinIconWrap}>
              <FaLinkedin className={styles.linkedinIcon} />
            </div>
          </div> */}

          <div className={`col-md-7 ${styles.right}`}>
            <div className={styles.contentWrap}>
                <div className={styles.linkedinIconWrap}>
              <FaLinkedin className={styles.linkedinIcon} />
            </div>
              <h2 className={styles.title}>Follow us on LinkedIn</h2>
              <p className={styles.description}>
                Follow us on linked in to get the latest news <br /> and
                updates! Know more about us and meet the team
              </p>
              <Link
                to="https://www.linkedin.com/company/badaruddin-pvt-ltd"
                target="_blank"
              >
                <button className={`btn ${styles.buttonsol}`}>
                  Follow LinkedIn
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
