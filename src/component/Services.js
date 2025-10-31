import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./Services.module.css";
import Img1 from "./../assets/images/banner/stevedores.jpg";
import Img2 from "./../assets/images/banner/6.png";
import Img3 from "./../assets/images/banner/7.png";
import Img4 from "./../assets/images/new1.jpg";
import Img5 from "./../assets/images/new4.webp";
import Img6 from "./../assets/images/banner/8.png";
import Img7 from "./../assets/images/new3.webp";
import Img8 from "./../assets/images/fleet.webp";
import Img9 from "./../assets/images/logistic.webp";
import { Link, useLocation } from "react-router-dom";

const services = [
  {
    title: "Stevedoring",
    desc: "Expert loading and unloading of vessels with precision and speed.",
    img: Img1,
  },
  {
    title: "Break Bulk",
    desc: "Specialized handling of non-containerized cargo for various industries.",
    img: Img2,
  },
  {
    title: "Bonded Warehousing",
    desc: "Secure, scalable storage solutions for all types of cargo.",
    img: Img3,
  },
  {
    title: "Loading & Unloading",
    desc: "Efficient handling at ports and inland facilities.",
    img: Img7,
  },
  {
    title: "Project Cargo Handling",
    desc: "Tailored solutions for oversized, heavy-lift, and high-value cargo.",
    img: Img4,
  },
  {
    title: "Container Operations",
    desc: "Comprehensive container handling, stacking, and maintenance services.",
    img: Img5,
  },
  {
    title: "Afghan Transit",
    desc: "Reliable cross-border logistics for Afghan-bound cargo movements.",
    img: Img6,
  },
  {
    title: "Fleet Management",
    desc: "Optimized fleet operations for timely and cost-effective deliveries.",
    img: Img8,
  },
  {
    title: "Logistics",
    desc: "End-to-end logistics solutions for seamless supply chain management.",
    img: Img9,
  },
];

const Services = () => {
  const location = useLocation();
  let heading = <>Cargo & Logistics Solutions</>;

  if (location.pathname === "/about") {
    heading = <>What We Do</>;
  }

  // Check if current path is "/services"
  const isServicesPage = location.pathname === "/service";

  return (
    <section
      data-aos="fade-up"
      className={`section ${styles.services}`}
      id="services"
    >
      <Container>
        <Row className="align-items-center text-center">
          <Col
            lg={12}
            className={`${styles.padding_services} ${
              isServicesPage ? styles.TextServicebtn : ""
            }`}
          >
            {/* <h2 className={`fw-bold ${styles.heading} `}>{heading}</h2> */}
            <div class="intro-text">
              <h3 className={`fw-bold ${styles.heading} `}>
                Full Service Bonded Wearhouse
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  color: "#555",
                  marginTop: "20px",
                  padding: "0 20px",
                }}
              >
                Strategically located inside Karachi Port, at Badaruddin we are
                able to provide efficient, secure and personalized warehousing
                services catering to the needs of our local and
                international clientele.
              </p>
              <h3 className={`fw-bold mt-5 ${styles.heading} `}>
                What we offer
              </h3>
            </div>
          </Col>
          {/* <Col
            lg={3}
            className={`text-lg-end text-center mt-3 mt-lg-0 ${
              styles.padding_services
            } ${isServicesPage ? styles.disabledBtn : ""}`}
          >
            <button
              className={`btn ${styles.exploreBtn} `}
              disabled={isServicesPage}
            >
              Explore All Services
            </button>
          </Col> */}
        </Row>

        <Row className="align-items-start mt-4">
          <Col lg={12} className={`ps-lg-0 ${styles.padding_services2}`}>
            <Row>
              {/* First Row -> pehle 4 services */}
              {services.map((service, idx) => (
                <Col md={6} lg={4} key={idx} className="mb-4">
                  <div
                    className={styles.card}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    data-aos-duration="1000"
                  >
                    <img
                      src={service.img}
                      alt={service.title}
                      className={styles.image}
                    />
                    <div className={styles.cardContent}>
                      <h5 className="mt-3 fw-bold">{service.title}</h5>
                      <p className="text-muted">{service.desc}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* <Row className="align-items-center">
              {services.slice(4, 9).map((service, idx) => (
                <Col md={6} lg={3} key={idx} className="mb-4">
                  <div className={styles.card}>
                    <img
                      src={service.img}
                      alt={service.title}
                      className={styles.image}
                    />
                    <div className={styles.cardContent}>
                      <h5 className="mt-3 fw-bold">{service.title}</h5>
                      <p className="text-muted">{service.desc}</p>
                    </div>
                  </div>
                </Col>
              ))}

              <Col
                md={6}
                lg={3}
                className="mb-4 d-flex align-items-center h-100"
              >
                <div className={`${styles.card} text-center w-100`}>
                  <h5 className={styles.lastcontact}>
                    Need A Custom <br /> Logistics Or Cargo <br /> Solution?
                  </h5>
                  <Link to="/contact">
                    <button className={`btn mt-3 ${styles.exploreBtn}`}>
                      Contact Now
                    </button>
                  </Link>
                </div>
              </Col>
            </Row> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
