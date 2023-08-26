"use client";
import Image from "next/image";
import React from "react";
import plus from "@/public/icons/+.svg";
import minus from "@/public/icons/-.svg";

import { AnimatePresence, motion } from "framer-motion";

interface AccordeonProps {
  title: string;
  content: string;
  open: boolean;
  id: number;
  onOpen: (e: React.PointerEvent<HTMLButtonElement>) => void;
}

const Accordeon = ({ content, open, title, id, onOpen }: AccordeonProps) => {
  return (
    <li>
      <div className="border-b-2 border-b-white  py-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[24px] font-bold">{title}</h2>
          <button id={id.toString()} onClick={onOpen}>
            <Image src={open ? minus : plus} alt="icone de botão da lista" />
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.p
              variants={{
                initial: { opacity: 0, y: -30 },
                animate: { opacity: 1, y: 0 },
              }}
              initial="initial"
              animate="animate"
              transition={{ type: "spring", duration: 0.5 }}
              className="text-base text-gray"
            >
              {content}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
};

export default Accordeon;
