import React from "react";
import TimelineCarousel from "../../component/TimelineCarousel";
import AboutHeader from "./AboutHeader";
import Services from "../../component/Services";
import Vision from "./Vision";
import CardsAbout from "./CardsAbout";
import PartnersClients from "./PartnersClients";
import LeadershipTeam from "./Leadership";
import Chooseus from "../../component/Chooseus";
import AccordionCustomer from "../../component/AccordionCustomer";

const About = () => {
  return (
    <>
      <AboutHeader />
      <div className="container">
        <TimelineCarousel />
        <Services />
        <Vision />
      </div>
      <CardsAbout />
      <PartnersClients />
      <LeadershipTeam />
      <Chooseus />
      <AccordionCustomer />
    </>
  );
};

export default About;
