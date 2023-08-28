import Image from "next/image";
import React from "react";
import card from "@/public/mockups/credit-card.png";
import AppearFromRight from "../Motion/AppearFromRight";

const Mockup = () => {
  return (
    <AppearFromRight>
      {" "}
      <div className="relative z-10 flex-1">
        <Image
          className="max-w-[600px] w-full"
          width={600}
          height={540}
          src={
            "https://res.cloudinary.com/dcdedf20g/image/upload/v1693222484/credit-card_qybmlc.png"
          }
          alt="Mocku de cartão de crédito"
        />
      </div>
    </AppearFromRight>
  );
};

export default Mockup;
