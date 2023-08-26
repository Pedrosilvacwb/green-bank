import Image from "next/image";
import React from "react";
import card from "@/public/mockups/credit-card.png";
import AppearFromRight from "../Motion/AppearFromRight";

const Mockup = () => {
  return (
    <AppearFromRight>
      {" "}
      <div className="relative z-10 flex-1">
        <Image src={card} alt="Mocku de cartão de crédito" />
      </div>
    </AppearFromRight>
  );
};

export default Mockup;
