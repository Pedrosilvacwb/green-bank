"use client";
import { motion } from "framer-motion";

import dell from "@/public/companies/dell.png";
import nyt from "@/public/companies/nyt.png";
import petal from "@/public/companies/petal.png";
import rakuten from "@/public/companies/rakuten.png";
import upwork from "@/public/companies/upwork.png";
import vice from "@/public/companies/vice.png";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const companies = [
  { name: "dell", icon: dell },
  { name: "nyt", icon: nyt },
  { name: "petal", icon: petal },
  { name: "rakuten", icon: rakuten },
  { name: "upwork", icon: upwork },
  { name: "vice", icon: vice },
];

const Carrousel = () => {
  return (
    <motion.div
      variants={{ initial: { x: 0 }, animate: { x: -2070 } }}
      initial="initial"
      animate="animate"
      transition={{
        ease: "linear",
        duration: 20,
        repeat: Infinity,
      }}
      className="items-center justify-between gap-56 md:flex hidden"
    >
      <ul className="min-w-[100vw] flex items-center justify-start gap-56 my-[128px]">
        {companies.map(({ icon, name }, index) => (
          <li key={name}>
            {" "}
            <Image src={icon} alt={name} />
          </li>
        ))}
      </ul>
      <ul className="min-w-[100vw] flex items-center justify-start gap-56 my-[128px]">
        {companies.map(({ icon, name }, index) => (
          <li key={name}>
            {" "}
            <Image src={icon} alt={name} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Carrousel;
