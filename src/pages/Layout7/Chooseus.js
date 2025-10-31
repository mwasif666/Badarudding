import React from "react";
import styles from "./Chooseus.module.css";
import { GoOrganization } from "react-icons/go";
import { VscOrganization } from "react-icons/vsc";
import { GrUserWorker } from "react-icons/gr";
import { PiBagFill } from "react-icons/pi";





const Chooseus = () => {
  return (
    <>
      <section className={styles.whyChooseSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className={`text-center ${styles.sectionHeader}`}
                data-aos="fade-up"
              >
                <h2 className={styles.sectionTitle}>Why Choose Badaruddin?</h2>
                <p className={styles.sectionSubtitle}>
                  We offer a complete range of bonded warehousing & Logistic
                  services under one roof, no need to go anywhere else because
                  we're here to serve you.
                </p>
                <p className={`${styles.sectionSubtitle} mt-3`}>
                  Improve your import-export business with Badaruddin:
                </p>
              </div>

              <div className="row justify-content-center g-4">
                {/* Feature 1 */}
                <div className="col-md-6 col-lg-4">
                  <div className={styles.featureCard} data-aos="fade-left">
                    <i
                      className={`fas fa-truck-loading ${styles.featureIcon}`}
                    ></i>
                    <h4 className={styles.featureTitle}>
                      Expert Logistics Solutions
                    </h4>
                    <p className={styles.featureDescription}>
                      Professional logistics planning and execution tailored to
                      your specific business needs.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="col-md-6 col-lg-4">
                  <div className={styles.featureCard} data-aos="fade-center">
                    <i
                      className={`fas fa-shield-alt ${styles.featureIcon}`}
                    ></i>
                    <h4 className={styles.featureTitle}>
                      Secure Facilities & Modern Equipment
                    </h4>
                    <p className={styles.featureDescription}>
                      State-of-the-art facilities equipped with the latest
                      technology for maximum security and efficiency.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="col-md-6 col-lg-4">
                  <div className={styles.featureCard} data-aos="fade-right">
                    <i className={`fas fa-users-cog ${styles.featureIcon}`}></i>
                    <h4 className={styles.featureTitle}>
                      Trained Staff for Cargo Handling
                    </h4>
                    <p className={styles.featureDescription}>
                      Our experienced team ensures safe and efficient handling
                      of all your cargo.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="col-md-6 col-lg-4">
                  <div className={styles.featureCard} data-aos="fade-left">
                    <i className={`fas fa-headset ${styles.featureIcon}`}></i>
                    <h4 className={styles.featureTitle}>
                      24/7 Customer Support
                    </h4>
                    <p className={styles.featureDescription}>
                      Round-the-clock assistance to address your queries and
                      concerns whenever you need us.
                    </p>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="col-md-6 col-lg-4">
                  <div className={styles.featureCard} data-aos="fade-center">
                    <i
                      className={`fas fa-map-marked-alt ${styles.featureIcon}`}
                    ></i>
                    <h4 className={styles.featureTitle}>
                      Real Time Tracking of Cargo
                    </h4>
                    <p className={styles.featureDescription}>
                      Monitor your shipments in real-time with our advanced
                      tracking system.
                    </p>
                  </div>
                </div>

                {/* Feature 6 */}
                <div className="col-md-6 col-lg-4">
                  <div className={styles.featureCard} data-aos="fade-right">
                    <i
                      className={`fas fa-clipboard-check ${styles.featureIcon}`}
                    ></i>
                    <h4 className={styles.featureTitle}>HSE Compliance</h4>
                    <p className={styles.featureDescription}>
                      Full compliance with Health, Safety, and Environment
                      regulations for peace of mind.
                    </p>
                  </div>
                </div>

                {/* Feature 7 */}
                <div className="col-md-6 col-lg-4">
                  <div className={styles.featureCard} data-aos="fade-left">
                    <i className={`fas fa-video ${styles.featureIcon}`}></i>
                    <h4 className={styles.featureTitle}>
                      Live Camera Monitoring
                    </h4>
                    <p className={styles.featureDescription}>
                      24/7 surveillance of our facilities to ensure the security
                      of your goods.
                    </p>
                  </div>
                </div>

                {/* Feature 8 */}
                <div className="col-md-6 col-lg-4">
                  <div className={styles.featureCard} data-aos="fade-center">
                    <i
                      className={`fas fa-satellite-dish ${styles.featureIcon}`}
                    ></i>
                    <h4 className={styles.featureTitle}>
                      Fleet Management with Tracker
                    </h4>
                    <p className={styles.featureDescription}>
                      Advanced fleet tracking and management for optimal route
                      planning and efficiency.
                    </p>
                  </div>
                </div>

                {/* Feature 9 */}
              

              </div>

              {/* Stats Section */}
              <div className={styles.statsSection} data-aos="fade-up">
                <div className="row text-center">
                  <div className="col-6 col-md-3">
                    <div className={styles.statItem}>
                      <div className={styles.statIcon}><GoOrganization /></div>
                      <div className={styles.statNumber}>25+</div>
                      <div className={styles.statLabel}>Year of Experiences</div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className={styles.statItem}>
                      <div className={styles.statIcon}><VscOrganization /></div>
                      <div className={styles.statNumber}>2,000+</div>
                      <div className={styles.statLabel}>Client Served</div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className={styles.statItem}>
                      <div className={styles.statIcon}><GrUserWorker /></div>
                      <div className={styles.statNumber}>350+</div>
                      <div className={styles.statLabel}>Employees</div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className={styles.statItem}>
                      <div className={styles.statIcon}><PiBagFill /></div>
                      <div className={styles.statNumber}>9</div>
                      <div className={styles.statLabel}>Companies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chooseus;
