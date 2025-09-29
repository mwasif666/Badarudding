import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

// Import FeatherIcon
import FeatherIcon from "feather-icons-react";

// Import Background Image
import Background from "../../assets/images/banner/2.png";
import QuoteSection from "./QuoteSection";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <section
          className="hero-7 bg-center position-relative"
          // Define Background Image
          style={{
            background: `url(${Background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "730px",
          }}
          id="home"
        >
          <div className="bg-overlay bg-dark"></div>
          <Row className="align-items-center">
            <Container>
              <Col lg={12}>
                <h1 className="font-weight-bold text-center mb-4 text-white hero-7-title">
                  Expert Port Logistics <br /> and Cargo Handling
                </h1>
                <p className="text-white text-center para-desc mx-auto">
                  For decades, Badaruddin has been at the forefront of bonded
                  warehousing and logistics at Karachi Port, providing trusted,
                  secure, and flexible solutions for international trade. Our
                  services are tailored to the needs of both importers and
                  exporters, ensuring smooth and efficient cargo handling every
                  step of the way. We offer bonded warehouse facilities, bulk
                  imports, bonded storage, and palletized exports, while also
                  specializing in cross-border trade, including Afghan Transit.
                  Badaruddin has become a preferred partner for businesses
                  seeking comprehensive logistics support.
                </p>
              </Col>
            </Container>
            {/* <Col lg={12} className="ms-lg-auto">
              <QuoteSection />
            </Col> */}
          </Row>
        </section>
        {/* Hero End */}
      </React.Fragment>
    );
  }
}

export default Section;
