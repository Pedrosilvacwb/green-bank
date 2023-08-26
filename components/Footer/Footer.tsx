import React from "react";
import Content from "./Content";
import Mockups from "./Mockups";
import Container from "../Container";
import Image from "next/image";
import logo from "@/public/icons/Logo.svg";
import FadeIn from "../Motion/FadeIn";
import AppearFromRight from "../Motion/AppearFromRight";
import AppearFromBottom from "../Motion/AppearFromBottom";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center justify-between md:flex-row flex-col">
          <FadeIn>
            {" "}
            <Content />
          </FadeIn>
          <AppearFromRight>
            <Mockups />
          </AppearFromRight>
        </div>
      </Container>
      <AppearFromBottom>
        <div className="py-16 bg-glass">
          <Container>
            <div className="flex items-center gap-3 mb-8">
              <Image src={logo} alt="Logo do green bank" className="w-6 h-6" />
              <h2 className="font-bold text-xl">GreenBank</h2>
            </div>
            <p className="text-lg text-gray mb-8">
              Discover the power of our secure and rewarding credit cards
            </p>
          </Container>
        </div>
      </AppearFromBottom>
    </div>
  );
};

export default Footer;
