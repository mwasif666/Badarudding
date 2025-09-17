// LeadershipTeam.jsx

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Leadership.module.css";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import img1 from "../../assets/images/team/1.png";
import img2 from "../../assets/images/team/2.png";
import img3 from "../../assets/images/team/3.png";
import img4 from "../../assets/images/team/4.png";
import img5 from "../../assets/images/team/5.png";
import img6 from "../../assets/images/team/6.png";
import img7 from "../../assets/images/team/7.png";
import img8 from "../../assets/images/team/8.png";
import img9 from "../../assets/images/team/3.png";

const team = [
  {
    name: "Raheel Javed",
    role: "HOD - Operations",
    blurb:
      "Head of Department overseeing operations with leadership in logistics & yard activities.",
    img: img1,
  },
  {
    name: "Khalique Ahmed",
    role: "Yard Supervisor - Operations",
    blurb:
      "Supervises yard operations ensuring smooth handling and coordination.",
    img: img2,
  },
  {
    name: "Ayub Shah",
    role: "Logistics Incharge - Logistics",
    blurb:
      "Manages logistics operations with responsibility for coordination and supply chain flow.",
    img: img3,
  },
  {
    name: "Mr. Usman",
    role: "Warehouse Executive - Operations",
    blurb: "Responsible for warehouse management and operational efficiency.",
    img: img4,
  },
  {
    name: "Mr. Hanif",
    role: "Senior Officer - Export Documentation",
    blurb:
      "Handles export documentation and ensures compliance with international standards.",
    img: img5,
  },
  {
    name: "Huzaifa Iqbal",
    role: "Senior Executive - Customer Service & Operations",
    blurb:
      "Ensures smooth operations while supporting customer service excellence.",
    img: img6,
  },
  {
    name: "Hasan Riaz",
    role: "Operation Executive - Customer Service & Operations",
    blurb:
      "Coordinates operations with a focus on customer satisfaction and efficiency.",
    img: img7,
  },
  {
    name: "M. Saim",
    role: "Logistics Assistant - Logistics",
    blurb:
      "Supports logistics operations ensuring timely and accurate coordination.",
    img: img8,
  },
  {
    name: "Sabih Ul Huq",
    role: "Senior Officer - Export Documentation",
    blurb:
      "Expert in export documentation with attention to detail and compliance.",
    img: img9,
  },
];

export default function LeadershipTeam() {
  return (
    <section id="team-section" className={`container ${styles.section}`}>
      <div className="text-center mb-4 mb-md-5">
        <h2 className={styles.title}>Our Leadership & Team</h2>
        <p className={`mx-auto ${styles.subheading}`}>
          Our experienced team combines decades of industry knowledge with
          modern logistics practices. Skilled professionals oversee all
          operations to ensure cargo integrity, safety compliance, and
          operational excellence.
        </p>
      </div>

      {/* Single grid layout - always show 4 per row */}
      <div className="row g-4 justify-content-center">
        {team.map((m) => (
          <div key={m.name} className="col-12 col-sm-6 col-lg-3">
            <MemberCard {...m} />
          </div>
        ))}
      </div>
    </section>
  );
}

function MemberCard({ name, role, blurb, img }) {
  return (
    <div className={`card h-100 border-0 ${styles.card}`}>
      <div className="card-body p-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div>
            <h5 className={`mb-1 ${styles.name}`}>{name}</h5>
            <div className={`small ${styles.role}`}>{role}</div>
          </div>
        </div>
        <p className={`mb-4 ${styles.blurb}`}>{blurb}</p>
        {/* <div className="d-flex align-items-end justify-content-between gap-2">
          <div className={styles.avatarWrap}>
            <img src={img} alt={name} className={styles.avatar} />
          </div>
          <div className="d-flex">
            <button type="button" className={styles.iconBtn} aria-label="Email">
              <span aria-hidden>
                <IoIosMail />
              </span>
            </button>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="LinkedIn"
            >
              <span aria-hidden>
                <FaLinkedinIn />
              </span>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
