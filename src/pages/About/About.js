import React from "react";
import TimelineCarousel from "../../component/TimelineCarousel";
import AboutHeader from "./AboutHeader";
import Services from "../../component/Services";
import CardsAbout from "./CardsAbout";
import PartnersClients from "./PartnersClients";
import LeadershipTeam from "./Leadership";
import AccordionCustomer from "../../component/AccordionCustomer";
import Vision from "../Layout7/Vision";
import Chooseus from "../Layout7/Chooseus";

const About = () => {
  return (
    <>
      <AboutHeader />
      <div className="container">
        <TimelineCarousel />
        <Vision />
      </div>
      {/* <CardsAbout /> */}
      <PartnersClients />
      <LeadershipTeam />
      <Chooseus />
      {/* <AccordionCustomer /> */}
    </>
  );
};

export default About;
