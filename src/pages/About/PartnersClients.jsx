import React from "react";
import styles from "./PartnersClients.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Apne logos import karo (replace paths with your actual files)
import Logo1 from "./../../assets/images/clients/1.png";
import Logo2 from "./../../assets/images/clients/2.png";
import Logo3 from "./../../assets/images/clients/3.png";
import Logo4 from "./../../assets/images/clients/4.png";
import Logo5 from "./../../assets/images/clients/5.png";
import Logo6 from "./../../assets/images/clients/6.png";
import Logo7 from "./../../assets/images/clients/7.png";
import Logo8 from "./../../assets/images/clients/8.png";
import Logo9 from "./../../assets/images/clients/9.png";
import Logo10 from "./../../assets/images/clients/10.png";
import Logo11 from "./../../assets/images/clients/11.png";
import Logo12 from "./../../assets/images/clients/12.png";
import Logo13 from "./../../assets/images/clients/13.png";
import Logo14 from "./../../assets/images/clients/14.png";
import Logo15 from "./../../assets/images/clients/15.png";
import Logo16 from "./../../assets/images/clients/16.png";
import Logo17 from "./../../assets/images/clients/17.png";
import Logo18 from "./../../assets/images/clients/18.png";
import Logo19 from "./../../assets/images/clients/19.png";
import Logo20 from "./../../assets/images/clients/20.png";

// Array of logos
const partnerLogos = [
  { id: 1, src: Logo1, alt: "Partner Logo 1" },
  { id: 2, src: Logo2, alt: "Partner Logo 2" },
  { id: 3, src: Logo3, alt: "Partner Logo 3" },
  { id: 4, src: Logo4, alt: "Partner Logo 4" },
  { id: 5, src: Logo5, alt: "Partner Logo 5" },
  { id: 6, src: Logo6, alt: "Partner Logo 6" },
  { id: 7, src: Logo7, alt: "Partner Logo 1" },
  { id: 8, src: Logo8, alt: "Partner Logo 2" },
  { id: 9, src: Logo9, alt: "Partner Logo 3" },
  { id: 10, src: Logo10, alt: "Partner Logo 4" },
  { id: 11, src: Logo11, alt: "Partner Logo 5" },
  { id: 12, src: Logo12, alt: "Partner Logo 6" },
  { id: 12, src: Logo13, alt: "Partner Logo 6" },
  { id: 12, src: Logo14, alt: "Partner Logo 6" },
  { id: 12, src: Logo15, alt: "Partner Logo 6" },
  { id: 12, src: Logo16, alt: "Partner Logo 6" },
  { id: 12, src: Logo17, alt: "Partner Logo 6" },
  { id: 12, src: Logo18, alt: "Partner Logo 6" },
  { id: 12, src: Logo19, alt: "Partner Logo 6" },
  { id: 12, src: Logo20, alt: "Partner Logo 6" },
];

export default function PartnersClients() {
  return (
    <section
      id="partners"
      className={` ${styles.wrapper}`}
      aria-labelledby="partners-heading"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 text-center">
            <h2 id="partners-heading" className={styles.title}>
              Our Partners & Clients
            </h2>
            <p className={`mx-auto ${styles.subtitle}`}>
              Badruddin Stevedoring serves major shipping lines, logistics
              providers, government projects, and freight forwarders across
              Pakistan. Through Waterlink Group, we collaborate closely with
              entities in air freight, sea freight, chartering, and customs
              brokerage.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Swiper
            className={styles.slider}
            modules={[Autoplay, FreeMode, A11y]}
            loop
            freeMode={{ enabled: true, momentum: false }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={6000}
            spaceBetween={16}
            loopedSlides={partnerLogos.length}
            allowTouchMove={false}
            breakpoints={{
              576: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 18 },
              992: { slidesPerView: 4, spaceBetween: 20 },
              1200: { slidesPerView: 6, spaceBetween: 20 },
            }}
            a11y={{
              prevSlideMessage: "Previous partners",
              nextSlideMessage: "Next partners",
            }}
          >
            {partnerLogos.map((item) => (
              <SwiperSlide key={item.id} className={styles.slideWrap}>
                <div className={styles.logoCard}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className={styles.logoImg}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
