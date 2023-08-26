import Image from "next/image";
import cards from "@/public/mockups/cards2.png";

const Mockups = () => {
  return (
    <div>
      <Image src={cards} alt="Mockups de cartões" />
    </div>
  );
};

export default Mockups;
