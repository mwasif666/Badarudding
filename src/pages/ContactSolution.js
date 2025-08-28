import React from "react";
import styles from "./ContactSolution.module.css";

const ContactSolution = () => {
  return (
    <section className={styles.solution}>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <h1>
              Need a Custom <br /> Logistics Solution?
            </h1>
          </div>
          <div className="col-12">
            <button className={`btn ${styles.buttonsol}`}>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSolution;
