import React from "react";
import Button from "../Button";
import detail from "@/public/icons/detail.svg";
import Image from "next/image";
import user from "@/public/mockups/Ellipse.png";
import user2 from "@/public/mockups/Ellipse-1.png";
import user3 from "@/public/mockups/Ellipse-2.png";
import FadeIn from "../Motion/FadeIn";

const Content = () => {
  return (
    <div className="flex-1 relative">
      <FadeIn>
        {" "}
        <h1 className="font-bold text-[52px] leading-[64px] tracking-normal mb-8">
          Discover the Perfect Credit Card for You
        </h1>
        <p className="text-gray text-lg leading-[24px] mb-8">
          Discover the power of our secure and rewarding credit cards. Explore
          our range of credit cards and take control of your finances today.
        </p>
      </FadeIn>
      <Image
        src={detail}
        alt="Detalhe na hero"
        className="absolute top-14 -z-10"
      />
      <Button label="Get Started" icon />

      <FadeIn>
        <div className="flex items-center gap-4 mt-8">
          <div className="flex ">
            <Image src={user} alt="Foto de usuário" />
            <Image className="-ml-4" src={user2} alt="Foto de usuário" />
            <Image className="-ml-4" src={user3} alt="Foto de usuário" />
          </div>
          <div className="max-w-[160px] w-full">
            <strong className="block text-base font-bold">10.2k+</strong>
            <span className="text-xs text-gray">
              Active users around the world
            </span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Content;
