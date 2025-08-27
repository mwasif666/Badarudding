import React, { Component } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Container,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
      navClass: "",
      imglight: true,
    };

    // Static Nav Items 👇
    this.navItems = [
      { id: 1, path: "/", navheading: "Home" },
      { id: 2, path: "/service", navheading: "Services" },
      { id: 3, path: "/customer-care", navheading: "Customer Care" },
      { id: 4, path: "/about", navheading: "About Us" },
    ];
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    let scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      this.setState({ navClass: "navbar-light nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav
          expand="lg"
          fixed="top"
          className={`navbar navbar-expand-lg fixed-top navbar-custom ${this.state.navClass}`}
          id="navbar"
        >
          <Container>
            {/* Logo */}
            <NavbarBrand href="/">
              <Link to="/" className="logo-link rounded-pill">
                Badaruddin
              </Link>
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle}>
              <i>
                <FeatherIcon icon="menu" />
              </i>
            </NavbarToggler>

            <Collapse
              id="navbarCollapse"
              isOpen={this.state.isOpenMenu}
              className="navbar-collapse"
            >
              <Nav navbar className="m-auto navbar-center" id="mySidenav">
                {this.navItems.map((item) => (
                  <NavItem
                    key={item.id}
                    className={item.navheading === "Home" ? "active" : ""}
                  >
                    <Link
                      className={`nav-link ${
                        item.navheading === "Home" ? "active" : ""
                      }`}
                      to={item.path}
                    >
                      {item.navheading}
                    </Link>
                  </NavItem>
                ))}
              </Nav>

              <Link
                to="/contact"
                className="btn btn-sm rounded-pill nav-btn ms-lg-3"
              >
                Contact
              </Link>
            </Collapse>
          </Container>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
