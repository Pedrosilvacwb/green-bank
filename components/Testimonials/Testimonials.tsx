import React from "react";
import TestimonialCard from "./TestimonialCard";
import Container from "../Container";
import { testimonials } from "@/constants/testimonials";
import AppearFromLeft from "../Motion/AppearFromLeft";

const Testimonials = () => {
  return (
    <Container>
      <div className="my-32">
        <ul className="flex items-center justify-between md:flex-row flex-col md:gap-0 gap-12">
          {testimonials.map(({ content, name, photo, profession }, index) => (
            <AppearFromLeft delay={index * 0.6} key={name}>
              <TestimonialCard
                content={content}
                name={name}
                photo={photo}
                profession={profession}
              />
            </AppearFromLeft>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Testimonials;
