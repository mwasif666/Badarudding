import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FooterLink from "../Footer/Footer_link";

// Footer Image
import footer_image from "../../assets/images/footer-bg.png";

import logolight from "../../assets/images/banner/logo.png";
// Import Logo

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          id: 1,
          title: "General",
          child: [
            { title: "About Us", link: "/" },
            { title: "Our Team", link: "/" },
            { title: "Our Partners", link: "/" },
            { title: "Innovations", link: "/" },
            { title: "Certifcations", link: "/" },
            { title: "Policy", link: "/" },
            { title: "Press", link: "/" },
          ],
        },
        {
          id: 2,
          title: "Services",
          child: [
            { title: "Stevedoring", link: "/service" },
            { title: "Break Bulk", link: "/service" },
            { title: "Warehousing/Storage", link: "/service" },
            { title: "Loading & Unloading", link: "/service" },
            { title: "Project Cargo Stevedoring", link: "/service" },
            { title: "Container Operations", link: "/service" },
            { title: "Afghan Transit", link: "/service" },
          ],
        },
        {
          id: 3,
          title: "Customer Centre",
          child: [
            { title: "Track Your Shipment", link: "/" },
            { title: "Invoices & Receipts", link: "/" },
            { title: "Request Documentation", link: "/" },
            { title: "Live Chat Support", link: "/" },
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
          <h1 className="footer_text_main">
            A Legacy of Excellence Since 1966
          </h1>
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <div className="mb-4">
                  <Link to="#">
                    <img
                      src={logolight}
                      alt=""
                      className=""
                      height="auto"
                      width="150px"
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
                    grown into a premier logistics <br /> company known for its
                    expertise in stevedoring, break bulk handling, and cargo
                    operations. With <br /> a strong reputation for
                    professionalism and precision, we’ve supported the evolving
                    needs of <br /> shipping lines, freight forwarders, and
                    logistics companies throughout the region.
                  </p>
                </div>
              </Col>
              <Col lg={7} className="m-auto">
                <Row>
                  {/* Render Footer Link */}
                  {this.state.links.map((item, key) => (
                    <Col lg={4} xs={6} key={key}>
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
