import React from "react";
import Button from "../Button";
import FadeIn from "../Motion/FadeIn";

const Content = () => {
  return (
    <div className="max-w-[500px] w-full">
      <FadeIn>
        {" "}
        <h2 className="text-[40px] font-bold mb-6">
          Design your personalized credit card.
        </h2>
        <p className="text-base text-gray max-w-[450px] mb-6">
          You have the freedom to personalize the design of your credit card,
          ensuring a truly unique experience that makes you feel extraordinary
        </p>
      </FadeIn>
      <Button label="Create New Card" icon />
    </div>
  );
};

export default Content;
