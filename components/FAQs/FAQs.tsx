"use client";
import React, { useState } from "react";
import Container from "../Container";
import Accordeon from "./Accordeon";
import { faqs } from "@/constants/FAQs";
import AppearFromTop from "../Motion/AppearFromTop";

const FAQs = () => {
  const [selectedTab, setSelectedTab] = useState<number | undefined>(1);

  const handleSelectTab = (e: React.PointerEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    if (selectedTab === +id) {
      setSelectedTab(undefined);
      return;
    }
    setSelectedTab(+id);
  };
  return (
    <Container>
      <div className="z-50 my-32">
        <h2 className="text-[40px] font-bold text-center mb-24">FAQs</h2>

        <ul>
          {faqs.map(({ content, title, id }, index) => (
            <AppearFromTop key={id} delay={0.3 * index}>
              <Accordeon
                onOpen={handleSelectTab}
                id={id}
                content={content}
                title={title}
                open={selectedTab === id}
              />
            </AppearFromTop>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default FAQs;
