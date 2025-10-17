import React from "react";
import styles from "./PartnersClients.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, A11y } from "swiper/modules";
import "swiper/css";

// Logos
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

const partnerLogos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
  Logo16,
  Logo17,
  Logo18,
  Logo19,
  Logo20,
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
  Logo16,
  Logo17,
  Logo18,
  Logo19,
  Logo20,
];

export default function PartnersClients() {
  // Split into 3 equal rows
  const rowCount = 3;
  const logosPerRow = Math.ceil(partnerLogos.length / rowCount);
  const rows = Array.from({ length: rowCount }, (_, i) =>
    partnerLogos.slice(i * logosPerRow, (i + 1) * logosPerRow)
  );

  return (
    <section
      id="partners"
      className={`${styles.wrapper}`}
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

        {/* 3 Swipers - one per line */}
        {rows.map((row, index) => (
          <Swiper
            key={index}
            className={`${styles.slider} mt-4`}
            modules={[Autoplay, FreeMode, A11y]}
            loop
            freeMode={{ enabled: true, momentum: false }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: index % 2 !== 0, // alternate directions
            }}
            speed={6000}
            spaceBetween={16}
            allowTouchMove={false}
            breakpoints={{
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
          >
            {row.map((logo, i) => (
              <SwiperSlide key={i} className={styles.slideWrap}>
                <div className={styles.logoCard}>
                  <img
                    src={logo}
                    alt={`Partner Logo ${i + 1}`}
                    loading="lazy"
                    className={styles.logoImg}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </section>
  );
}
