import React, { Component } from "react";
import routes from "../src/routes";
import { Route, Routes } from "react-router-dom";

// Import global CSS
import "./App.css";
import "./assets/css/pe-icon-7.css";
import "./assets/css/materialdesignicons.min.css";
import "./assets/scss/themes.scss";

import Footer from "./component/Footer/Footer";
import NavbarPage from "./component/Navbar/NavBar";
import ScrollToTop from "./Scroll";

// ✅ WhatsApp icon import
import { FaWhatsapp } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollToTop />
        <NavbarPage />

        <Routes>
          {routes.map((route, idx) => (
            <Route path={route.path} element={route.component} key={idx} />
          ))}
        </Routes>

        <Footer />

        {/* ✅ WhatsApp Floating Button */}
        <a
          href="https://wa.me/923205486534"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </React.Fragment>
    );
  }
}

export default App;
