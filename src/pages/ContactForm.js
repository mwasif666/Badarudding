import React from "react";
import styles from "./ContactFrom.module.css";
import {
  FaMapMarkerAlt,
  FaMapMarker,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { BiGeoAlt, BiGeo, BiTelephone, BiEnvelope } from "react-icons/bi";

const ContactForm = () => {
  return (
    <section className={styles.ContactForm} id="customer">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-6 ps-5">
            <h1 className={styles.headingH1}>
              Looking for a third party logistics company
            </h1>
            <div className={styles.paras}>
              <p>
                Improve your logistics efficiency by outsourcing your retail,
                storage, inventory, and transportation management.
              </p>

              <p>
                Have questions or need more information? Want a tour of our
                facilities? Give us a call or send us a message, and our team
                will be in touch with you.
              </p>
            </div>

            <h4 className={styles.headingH4}>Green Logistics</h4>
            <ul className={styles.contactList}>
              <li>
                <FaMapMarkerAlt /> 1st Floor, 17-19 Ebrahim Building (Reor),{" "}
                <br />
                West Whorf Road, Karachi, Sindh, Pakistan
              </li>

              <li>
                <FaPhone /> +92-320-5486534
              </li>
              <li>
                <FaEnvelope /> info@badaruddin.net
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className={styles.FormContact}>
              <h3>Get in touch today!</h3>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Personal name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Message"
                  style={{ height: "auto" }}
                ></textarea>

                <button type="submit" className={styles.submitBtn}>
                  CONTACT US
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
