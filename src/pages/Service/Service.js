import React from "react";

import AccordionCustomer from "../../component/AccordionCustomer";
import ServiceHeader from "./ServiceHeader";
import Services from "./Services";
import ServiceSolution from "./ServiceSolution";
import Chooseus from "../Layout7/Chooseus";

const Service = () => {
  return (
    <>
      <ServiceHeader />
      <div className="container">
        <Services />
      </div>
      <ServiceSolution />
      <Chooseus />
    </>
  );
};

export default Service;
