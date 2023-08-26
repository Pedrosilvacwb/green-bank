import Image from "next/image";
import React from "react";
import cards from "@/public/mockups/cards.png";

const Mockups = () => {
  return (
    <div>
      <Image src={cards} alt="Mocku de cartão de credito" />
    </div>
  );
};

export default Mockups;
