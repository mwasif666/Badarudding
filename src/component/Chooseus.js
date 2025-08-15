import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Chooseus.module.css";
import img1 from "../assets/images/choose.jpg";
import img2 from "../assets/images/banner/5.png";

const Chooseus = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Experience",
      content:
        "Over 5 decades of trusted logistics and stevedoring excellence.",
      image: img1,
    },
    {
      title: "Innovation",
      content: "Modern equipment, digital tracking, and process optimization.",
      image: img2,
    },
    {
      title: "Customer Focus",
      content: "Our commitment to delivering the best service to clients.",
      image: img1,
    },
    {
      title: "Safety First",
      content: "We prioritize the safety of our team and operations.",
      image: img1,
    },
    {
      title: "Our Team",
      content: "A dedicated team of skilled professionals working together.",
      image: img1,
    },
    {
      title: "Our Partners",
      content:
        "Collaborating with the best in the industry for mutual success.",
      image: img1,
    },
  ];

  return (
    <div className={`container mt-5 ${styles.chooseUsSection}`}>
      <h2 className="text-center mb-4">
        Why Choose <br /> Badaruddin Stevedoring?
      </h2>
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-6">
          <div className={styles.sidebar}>
            {sections.map((section, index) => (
              <div
                key={index}
                className={`${styles.sidebarItem} ${
                  activeSection === index ? styles.active : ""
                }`}
                onClick={() => setActiveSection(index)}
              >
                <div className={styles.titleRow}>
                  <span className={styles.title}>{section.title}</span>
                  {activeSection === index && (
                    <div className={styles.activeLine}></div>
                  )}
                </div>
                {activeSection === index && (
                  <p className={styles.content}>{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <div className={styles.imageWrapper}>
            <img
              src={sections[activeSection].image}
              alt={sections[activeSection].title}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
