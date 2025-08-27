import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Container,
  Collapse,
} from "reactstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const NavbarPage = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [navClass, setNavClass] = useState("");
  const [imglight, setImglight] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";

  // Static Nav Items 👇
  const navItems = [
    { id: 1, path: "/", navheading: "Home" },
    { id: 2, path: "/service", navheading: "Services" },
    { id: 3, path: "/#customer", navheading: "Customer Care" },
    { id: 4, path: "/about", navheading: "About Us" },
  ];

  const toggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Scroll effect for navbar
  useEffect(() => {
    const scrollNavigation = () => {
      let scrollup = document.documentElement.scrollTop;
      if (scrollup > 50) {
        setNavClass("navbar-light nav-sticky");
        setImglight(false);
      } else {
        setNavClass("");
        setImglight(true);
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
      navigate("/#customer");
      setTimeout(() => {
        scrollToId("customer");
      }, 300); // wait for route change
    }
    setIsOpenMenu(false);
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
                backgroundColor: isHomepage ? "white" : "#f7efe9",
                transition: "background-color 0.3s ease",
                color: "#02492e",
              }}
            >
              Badaruddin
            </Link>
          </NavbarBrand>

          <NavbarToggler onClick={toggle}>
            <i>
              <FeatherIcon icon="menu" />
            </i>
          </NavbarToggler>

          <Collapse
            id="navbarCollapse"
            isOpen={isOpenMenu}
            className="navbar-collapse"
          >
            <Nav
              navbar
              className="m-auto navbar-center"
              id="mySidenav"
              style={{
                backgroundColor: isHomepage ? "white" : "#f7efe9",
                transition: "background-color 0.3s ease",
              }}
            >
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
                      style={{
                        color: "#02492e",
                        fontWeight: "500",
                      }}
                    >
                      {item.navheading}
                    </a>
                  ) : (
                    <Link
                      className={`nav-link ${
                        location.pathname === item.path ? "active" : ""
                      }`}
                      to={item.path}
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
            </Nav>

            <Link
              to="/contact"
              className="btn btn-sm rounded-pill nav-btn ms-lg-3"
              style={{
                backgroundColor: isHomepage ? "white" : "#f7efe9",
                transition: "background-color 0.3s ease",
                color: "#02492e",
              }}
            >
              Contact
            </Link>
          </Collapse>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default NavbarPage;
