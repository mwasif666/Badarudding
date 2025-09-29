import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FooterLink from "../Footer/Footer_link";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

// Footer Image
import footer_image from "../../assets/images/footer-bg.png";

import logolight from "../../assets/images/banner/logo2.png";
// Import Logo

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          id: 1,
          title: "Quic Links",
          child: [
            { title: "About Us", link: "/about" },
            { title: "Our Team", link: "/about#team-section" },
            { title: "Our Partners", link: "/about#partners" },
            { title: "Contact us", link: "/contact#contactform" },
            { title: "Services", link: "/service" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Footer Start */}
        <footer className="footer">
          <Container>
            <Row>
              <Col lg={5} className="text-start">
                <div className="mb-4">
                  <Link to="#">
                    <img
                      src={logolight}
                      alt=""
                      className=""
                      height="auto"
                      width="70px"
                    />
                  </Link>
                  <p
                    className="text-white-50 my-4"
                    style={{
                      fontSize: "18px",
                      color: "white",
                    }}
                  >
                    Established in 1966, BADARUDDIN STEVEDORING (PVT) LTD has
                    grown into a premier logistics company known for its
                    expertise in stevedoring, break bulk handling, and cargo
                    operations.We’ve supported the evolving needs of shipping
                    lines, freight forwarders, and logistics companies
                    throughout the region.
                  </p>
                </div>
              </Col>
              <Col lg={3} className="m-auto d-flex justify-content-center">
                <Row>
                  {/* Render Footer Link */}
                  {this.state.links.map((item, key) => (
                    <Col lg={12} key={key}>
                      <div className="mt-4 mt-lg-0">
                        <h4 className="text-white font-size-18 mb-3">
                          {item.title}
                        </h4>
                        <ul className="list-unstyled footer-sub-menu">
                          {item.child.map((linkItem, key) => (
                            <li key={key}>
                              <Link className="footer-link" to={linkItem.link}>
                                {linkItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col lg={4} className="text-white">
                <div className="footer-contact" style={{ fontSize: "16px" }}>
                  <p style={{ margin: "8px 0" }}>
                    <FiMapPin style={{ marginRight: "8px" }} />
                    1st Floor, 17-19 Ebrahim Building (Reor),
                    <br />
                    West Whorf Road, Karachi, Sindh, Pakistan
                  </p>
                  <p style={{ margin: "8px 0" }}>
                    <FiPhone style={{ marginRight: "8px" }} />
                    +92-320-5486534
                  </p>
                  <p style={{ margin: "8px 0" }}>
                    <FiMail style={{ marginRight: "8px" }} />
                    <a
                      href="mailto:info@badaruddin.net"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      info@badaruddin.net
                    </a>
                  </p>
                </div>
                <div
                  className="map-responsive"
                  style={{ borderRadius: "12px", overflow: "hidden" }}
                >
                  <iframe
                    title="Company Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28963.398586601397!2d66.97720793430877!3d24.849336215878193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315fb5ab8d371%3A0x60a9dd83400060a9!2sEbrahim%20Building%D8%8C%2020%2C%20West%20Wharf%20Road%2C%20W%20Wharf%20Rd%2C%20West%20Wharf%20Karachi%2C%2074700%2C%20Pakistan!5e0!3m2!1sen!2s!4v1754996926687!5m2!1sen!2s"
                    width="100%"
                    height="200"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </Col>
            </Row>
            {/* Render Footer Link End */}
            <FooterLink />
          </Container>
        </footer>
        {/* Footer End */}
      </React.Fragment>
    );
  }
}

export default Footer;
