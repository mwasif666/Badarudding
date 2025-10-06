import React from "react";
import styles from "./Solution.module.css";
import { Link } from "react-router-dom";

const Solution = () => {
  return (
    <div className="container-fluid px-lg-5 px-2">
      <section className={styles.solution}>
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <h1>
              Need a Custom <br /> Logistics Solution?
            </h1>
          </div>
          <div className="col-12" data-aos="fade-up" data-aos-delay="100">
            <Link to="/contact">
              <button className={`btn ${styles.buttonsol}`}>Contact Us</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
