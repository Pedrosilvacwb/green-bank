import React from "react";
import Button from "../Button";
import FadeIn from "../Motion/FadeIn";

const Content = () => {
  return (
    <div className="max-w-[600px] w-full ">
      <FadeIn>
        {" "}
        <h2 className="text-[40px] font-bold mb-6">
          Find the Perfect Credit Card for You
        </h2>
        <p className="text-base text-gray max-w-[500px] w-full mb-6">
          Discover your ideal credit card with ease. Our comprehensive selection
          caters to every financial need and lifestyle. Whether you seek
          cashback rewards, travel perks, or building credit, we have the
          perfect credit card waiting for you. Unleash the possibilities and
          find the credit card that fits your unique goals and aspirations.
        </p>
      </FadeIn>
      <Button label="Learn More" />
    </div>
  );
};

export default Content;
