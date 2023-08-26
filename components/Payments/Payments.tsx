import React from "react";
import Content from "./Content";
import Mockups from "./Mockups";
import Container from "../Container";
import AppearFromLeft from "../Motion/AppearFromLeft";

const Payments = () => {
  return (
    <Container>
      <div className="flex items-center md:flex-row flex-col-reverse gap-12 md:gap-0 justify-between my-32">
        <AppearFromLeft>
          {" "}
          <Mockups />
        </AppearFromLeft>
        <Content />
      </div>
    </Container>
  );
};

export default Payments;
