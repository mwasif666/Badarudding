import React from "react";

import Chooseus from "../../component/Chooseus";
import AccordionCustomer from "../../component/AccordionCustomer";
import ServiceHeader from "./ServiceHeader";
import Services from "./Services";
import ServiceSolution from "./ServiceSolution";

const Service = () => {
  return (
    <>
      <ServiceHeader />
      <div className="container">
        <Services />
      </div>
      <ServiceSolution />
      <Chooseus />
      <AccordionCustomer />
    </>
  );
};

export default Service;
