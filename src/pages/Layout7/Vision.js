import React from "react";

const Vision = () => {
  return (
    <>
      <section className="vision-mission mb-5">
        <div className="container ">
          <div className="section-title">
            <h2>Our Vision & Mission</h2>
            <p>
              Driving excellence in logistics through innovation,
              sustainability, and customer-centric solutions
            </p>
          </div>

          <div className="vision-mission-grid">
            <div className="vision-card">
              <div className="card-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading bonded warehousing and logistics partner in
                the region, recognized for innovation, reliability, and creating
                value-driven solutions that empower global trade and
                connectivity.
              </p>
            </div>

            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                Our mission is to empower businesses with seamless trade
                solutions by providing secure bonded warehousing, smart
                logistics, and dependable cross-border services. We strive to
                deliver excellence through transparency, technology, and
                customer-focused operations, ensuring long-term partnerships
                built on trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
