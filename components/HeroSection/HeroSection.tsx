import React from "react";
import Content from "./Content";
import Mockup from "./Mockup";
import Container from "../Container";

const HeroSection = () => {
  return (
    <Container>
      <div className="my-[128px] flex md:flex-row flex-col items-start justify-between lg:gap-8 gap-20">
        <Content />
        <Mockup />
      </div>
    </Container>
  );
};

export default HeroSection;
