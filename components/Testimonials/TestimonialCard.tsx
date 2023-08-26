import Image, { StaticImageData } from "next/image";
import React from "react";
import quote from "@/public/icons/Frame.svg";

interface CardProps {
  content: string;
  photo: StaticImageData;
  name: string;
  profession: string;
}

const TestimonialCard = ({ content, name, photo, profession }: CardProps) => {
  return (
    <li className="px-6 py-12 bg-glass w-full max-w-[392px] rounded-3xl backdrop-blur-sm z-10">
      <div className="p-4 rounded-full bg-gray max-w-fit bg-opacity-25 mb-8">
        <Image src={quote} alt="Detalhes de aspas" />
      </div>
      <div className="mb-8">
        <p>{content}</p>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <Image src={photo} alt={name} />
        </div>
        <div>
          <strong className="block font-bold">{name}</strong>
          <span className="text-sm text-gray">{profession}</span>
        </div>
      </div>
    </li>
  );
};

export default TestimonialCard;
