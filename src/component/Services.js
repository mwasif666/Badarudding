import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Services.module.css";
import Img1 from "../assets/images/banner/5.png";
import Img2 from "../assets/images/banner/6.png";
import Img3 from "../assets/images/banner/7.png";
import { useLocation } from "react-router-dom";

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
    title: "Warehousing/Storage",
    desc: "Secure, scalable storage solutions for all types of cargo.",
    img: Img3,
  },
  {
    title: "Loading",
    desc: "Efficient equipment and experienced personnel for container handling.",
    img: Img1,
  },
  {
    title: "Break Bulk",
    desc: "Specialized handling of non-containerized cargo for vehicles.",
    img: Img2,
  },
];

const Services = () => {
  const location = useLocation();
  let heading = (
    <>
      Comprehensive <br /> Cargo & Logistics <br /> Solutions
    </>
  );

  // Agar /about page pe ho to dusra heading
  if (location.pathname === "/about") {
    heading = <>What We Do</>;
  }
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  return (
    <section className={`section ${styles.services}`} id="services">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className={styles.padding_services}>
            <h2 className={`fw-bold ${styles.heading}`}>{heading}</h2>
          </Col>
          <Col
            lg={5}
            className={`text-lg-end mt-3 mt-lg-0 ${styles.padding_services}`}
          >
            <button className={`btn ${styles.exploreBtn}`}>
              Explore All Services
            </button>
          </Col>
        </Row>

        <Row className="align-items-start mt-4">
          <Col lg={3} className={styles.paddingservices}>
            <div>
              <p className={`mt-4 ${styles.description}`}>
                We provide a wide range of services designed to meet the complex
                demands of today's shipping and logistics
              </p>
              <div className={`mt-3 d-flex align-items-center gap-3`}>
                <div ref={prevRef} className={`${styles.navBtn}`}>
                  ❮
                </div>
                <div ref={nextRef} className={`${styles.navBtn}`}>
                  ❯
                </div>
              </div>
            </div>
          </Col>
          <Col lg={9} className={`ps-lg-0 ${styles.padding_services2}`}>
            <div className={styles.sliderOuterContainer}>
              <div className={styles.sliderContainer}>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={15}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 10 },
                    576: { slidesPerView: 2, spaceBetween: 15 },
                    768: { slidesPerView: 3, spaceBetween: 15 },
                  }}
                >
                  {services.map((service, idx) => (
                    <SwiperSlide key={idx}>
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
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
