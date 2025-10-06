import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Container,
  Collapse,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Button,
} from "reactstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const NavbarPage = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [navClass, setNavClass] = useState("");
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";

  const navItems = [
    { id: 1, path: "/", navheading: "Home" },
    { id: 2, path: "/about", navheading: "About Us" },
    { id: 3, path: "/service", navheading: "Services" },
    // { id: 3, path: "/#customer", navheading: "Customer Care" },
    { id: 4, path: "/commingsoon", navheading: "Live Tracking Portal" },
    { id: 5, path: "/commingsoon", navheading: "Career" },
    { id: 6, path: "/commingsoon", navheading: "Gallery" },
  ];

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const toggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Scroll effect for navbar
  useEffect(() => {
    const scrollNavigation = () => {
      let scrollup = document.documentElement.scrollTop;
      if (scrollup > 50) {
        setNavClass("navbar-light nav-sticky");
      } else {
        setNavClass("");
      }
    };
    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);

  // Scroll to section
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Handle Customer Care click
  const handleCustomerClick = (e) => {
    e.preventDefault();
    if (isHomepage) {
      // Already on home → just scroll
      scrollToId("customer");
    } else {
      // Navigate to home first
      navigate("/");
      setTimeout(() => {
        scrollToId("customer");
      }, 300); // wait for route change
    }
    setIsOpenMenu(false);
    setIsOffcanvasOpen(false);
  };

  // Close offcanvas when a link is clicked
  const handleNavClick = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <React.Fragment>
      <nav
        expand="lg"
        fixed="top"
        className={`navbar navbar-expand-lg fixed-top navbar-custom ${navClass}`}
        id="navbar"
      >
        <Container>
          {/* Logo */}
          <NavbarBrand href="/">
            <Link
              to="/"
              className="logo-link rounded-pill"
              style={{
                padding: "8px 16px",
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              <div className="image-logo d-flex align-items-center gap-2">
                <img
                  src="./logo2.png"
                  style={{
                    width: "50px",
                    height: "40px",
                  }}
                  alt=""
                />
                <span>Badaruddin</span>
              </div>
            </Link>
          </NavbarBrand>

          {/* Desktop menu - hidden on mobile */}
          <div
            className="d-none d-lg-flex align-items-center"
            style={{
              gap: "16px",
            }}
          >
            <Nav className="m-auto navbar-center" id="mySidenav">
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  {item.path === "/#customer" ? (
                    <a
                      href="/#customer"
                      onClick={handleCustomerClick}
                      className="nav-link"
                    >
                      {item.navheading}
                    </a>
                  ) : (
                    <Link
                      className={`nav-link ${
                        location.pathname === item.path ? "active" : ""
                      }`}
                      to={item.path}
                    >
                      {item.navheading}
                    </Link>
                  )}
                </NavItem>
              ))}
            </Nav>

            <Link
              to="/contact"
              className="btn rounded-pill nav-btn ms-lg-3 contactnavbtn"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <NavbarToggler onClick={toggleOffcanvas} className="d-lg-none">
            <FeatherIcon icon="menu" />
          </NavbarToggler>
        </Container>
      </nav>

      {/* Offcanvas for mobile */}
      <Offcanvas
        isOpen={isOffcanvasOpen}
        toggle={toggleOffcanvas}
        direction="end"
        style={{ width: "280px" }}
        className="d-lg-none"
      >
        <OffcanvasHeader toggle={toggleOffcanvas} className="border-bottom">
          <div className="d-flex align-items-center">
            <Link
              to="/"
              className="logo-link rounded-pill"
              onClick={handleNavClick}
            >
              Badaruddin
            </Link>
          </div>
        </OffcanvasHeader>
        <OffcanvasBody>
          <Nav navbar vertical className="mt-4">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                className={`my-2 ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.path === "/#customer" ? (
                  <a
                    href="/#customer"
                    onClick={(e) => {
                      handleCustomerClick(e);
                      handleNavClick();
                    }}
                    className="nav-link"
                    style={{
                      color: "#02492e",
                      fontWeight: "500",
                    }}
                  >
                    {item.navheading}
                  </a>
                ) : (
                  <Link
                    className="nav-link"
                    to={item.path}
                    onClick={handleNavClick}
                    style={{
                      color: "#02492e",
                      fontWeight: "500",
                    }}
                  >
                    {item.navheading}
                  </Link>
                )}
              </NavItem>
            ))}
            <NavItem className="mt-4">
              <Link
                to="/contact"
                className="btn btn-sm rounded-pill nav-btn w-100 text-center"
                onClick={handleNavClick}
              >
                Contact Us
              </Link>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>

      {/* Inline styles for the offcanvas */}
      <style>
        {`
          .offcanvas.offcanvas-end {
            width: 280px !important;
            background-color: #fff;
          }
          .offcanvas-header .btn-close {
            font-size: 1.2rem;
          }
          .navbar-toggler {
            border: none;
            padding: 0.25rem;
          }
          .navbar-toggler:focus {
            box-shadow: none;
          }
          @media (max-width: 991px) {
            .navbar-collapse {
              display: none !important;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default NavbarPage;
