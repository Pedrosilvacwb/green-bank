import Image from "next/image";
import cards from "@/public/mockups/cards2.png";

const Mockups = () => {
  return (
    <div>
      <Image
        width={454}
        height={488}
        src="https://res.cloudinary.com/dcdedf20g/image/upload/v1693222484/cards2_qpfi0g.png"
        alt="Mockups de cartões"
      />
    </div>
  );
};

export default Mockups;
