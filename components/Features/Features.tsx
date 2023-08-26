import React from "react";
import Container from "../Container";
import { features } from "@/constants/features";
import Image from "next/image";
import AppearFromLeft from "../Motion/AppearFromLeft";

const Features = () => {
  return (
    <Container>
      <div className="mb-[128px]">
        <h2 className="text-[40px] font-bold text-center mb-16">
          What do we offer?
        </h2>
        <ul className="flex items-center justify-between md:flex-row flex-col md:gap-0 gap-12">
          {features.map(({ content, heading, icons }, index) => (
            <AppearFromLeft delay={0.5 * index} key={heading}>
              <li className="flex items-start gap-6">
                <div className="p-4 rounded-3xl bg-glass">
                  <Image src={icons} alt={heading} />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">{heading}</h3>
                  <span className="text-base text-gray">{content}</span>
                </div>
              </li>
            </AppearFromLeft>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Features;
