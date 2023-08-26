import React from "react";
import Container from "../Container";
import Banner from "./Banner";
import Carrousel from "./Carrousel";
import FadeIn from "../Motion/FadeIn";
import AppearFromBottom from "../Motion/AppearFromBottom";

const About = () => {
  return (
    <div className="overflow-x-hidden mb-[128px]">
      <Container>
        <AppearFromBottom>
          <Banner />
        </AppearFromBottom>
      </Container>
      <Carrousel />
    </div>
  );
};

export default About;
