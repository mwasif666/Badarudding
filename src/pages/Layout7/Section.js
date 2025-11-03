import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// Import Background Video & Thumbnail
import Background from "../../assets/images/banner.mp4";
import Thumbnail from "../../assets/images/banner/2.png"; // add your thumbnail image here

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <section
          className="hero-7 position-relative"
          id="home"
          style={{ height: "730px", overflow: "hidden" }}
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={Thumbnail} // <-- thumbnail appears before video starts
            className="position-absolute w-100 h-100"
            style={{
              objectFit: "cover",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <source src={Background} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay */}
          <div
            className="bg-overla bg-dar"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.4)", // adjustable darkness
              zIndex: 0,
            }}
          ></div>

          {/* Content */}
          <Container className="h-100 d-flex align-items-center justify-content-center text-center">
            <Row className="w-100">
              <Col lg={12} data-aos="fade-up">
                <h1 className="font-weight-bold text-white hero-7-title mb-4">
                  Expert Port Logistics <br /> and Cargo Handling
                </h1>
                <p className="text-white para-desc mx-auto">
                  Since 1966, Badaruddin has been at the forefront of bonded
                  warehousing and logistics at Karachi Port, providing trusted,
                  secure, and flexible solutions for international trade. Our
                  services are tailored to the needs of both importers and
                  exporters, ensuring smooth and efficient cargo handling every
                  step of the way. We offer bonded warehouse facilities, bulk
                  imports, bonded storage, and palletized exports, while also
                  specializing in cross-border trade, including Afghan Transit.
                  Badaruddin has become a preferred partner for businesses
                  seeking comprehensive logistics support.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Hero End */}
      </React.Fragment>
    );
  }
}

export default Section;
