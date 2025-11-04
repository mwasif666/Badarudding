import React from "react";
import style from "./About.module.css";

const AboutHeader = () => {
  return (
    <>
      <div data-aos="fade-up">
        <div className="container">
          <h1 className={style.headerMain}>A Legacy of Excellence</h1>
          <p className={style.para}>
            Badaruddin Stevedoring (Pvt. Ltd.) has grown into a premier
            logistics company known for its <br /> expertise in stevedoring,
            break bulk handling, and cargo operations. With a strong reputation
            for professionalism <br /> and precision, we’ve supported the
            evolving needs of shipping lines, freight forwarders, and logistics
            companies <br />
            throughout the region.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
