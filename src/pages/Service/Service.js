import React from "react";

import ServiceHeader from "./ServiceHeader";
import Services from "./Services";
import Chooseus from "../Layout7/Chooseus";
import Solution from "../../component/Solution";

const Service = () => {
  return (
    <>
      <ServiceHeader />
      <div className="container">
        <Services />
      </div>
      <Solution />
      <Chooseus />
    </>
  );
};

export default Service;
