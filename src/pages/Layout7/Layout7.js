import React, { Component, Suspense } from "react";
import Switch from "../../component/Switch";
import Solution from "../../component/Solution";
import AccordionCustomer from "../../component/AccordionCustomer";
import ContactForm from "../ContactForm";
import Vision from "./Vision";
import Chooseus from "./Chooseus";

// Import Sections
const Navbar = React.lazy(() => import("../../component/Navbar/NavBar"));
const Section = React.lazy(() => import("./Section"));
const Services = React.lazy(() => import("../../component/Services"));
const Footer = React.lazy(() => import("../../component/Footer/Footer"));

class Layout7 extends Component {
  // Loader
  Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.Loader()}>
          {/* Navbar directly import hoga */}
          <Navbar />

          {/* Sections */}
          <Section />
          <Services />
          <Vision />
          <Solution />
          <Chooseus />
          {/* <AccordionCustomer /> */}
          {/* <Footer /> */}

          {/* Mode Switch */}
          <ContactForm />
          <Switch />
        </Suspense>
      </React.Fragment>
    );
  }
}

export default Layout7;
