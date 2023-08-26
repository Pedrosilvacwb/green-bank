import Image from "next/image";
import React from "react";
import phone from "@/public/mockups/phone.png";

const Mockups = () => {
  return (
    <div>
      <Image
        className="max-w-[600px] w-full"
        src={phone}
        alt="Mockup de iphone"
      />
    </div>
  );
};

export default Mockups;
