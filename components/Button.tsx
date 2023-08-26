import Image from "next/image";
import React from "react";
import arrow from "@/public/icons/Vector 7.svg";

interface ButtonProps {
  label: string;
  icon?: boolean;
}

const Button = ({ label, icon }: ButtonProps) => {
  return (
    <button className="py-4 px-8 bg-green-base rounded-3xl flex items-center gap-3">
      <span>{label}</span>
      {icon && <Image src={arrow} alt="Icone" />}
    </button>
  );
};

export default Button;
