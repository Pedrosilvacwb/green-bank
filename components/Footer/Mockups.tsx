import Image from "next/image";
import React from "react";
import phone from "@/public/mockups/phone.png";

const Mockups = () => {
  return (
    <div>
      <Image
        width={600}
        height={800}
        className="max-w-[600px] w-full"
        src="https://res.cloudinary.com/dcdedf20g/image/upload/v1693222486/phone_foeilw.png"
        alt="Mockup de iphone"
      />
    </div>
  );
};

export default Mockups;
