import React from "react";
import Container from "../Container";
import Content from "./Content";
import Mockups from "./Mockups";
import AppearFromRight from "../Motion/AppearFromRight";

const Process = () => {
  return (
    <Container>
      <div className="md:flex-row flex-col gap-20 md:gap-0 flex items-center justify-between mb-[128px] mt-32">
        <Content />
        <AppearFromRight>
          <Mockups />
        </AppearFromRight>
      </div>
    </Container>
  );
};

export default Process;
