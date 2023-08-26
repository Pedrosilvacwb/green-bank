import React from "react";

const Banner = () => {
  return (
    <div className="w-full md:p-[64px] p-[32px] bg-glass rounded-3xl backdrop-blur-sm grid md:grid-cols-4 grid-cols-2 items-center justify-between gap-8 mb-[128px]">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-bold md:text-5xl text-3xl">16y</h2>
        <span className="text-base text-green-base">Experience</span>
      </div>
      <div className="flex flex-col items-center text-center">
        <h2 className="font-bold md:text-5xl text-3xl">250+</h2>
        <span className="md:text-base text-sm text-green-base">
          Merchant Partner
        </span>
      </div>
      <div className="flex flex-col items-center text-center">
        <h2 className="font-bold md:text-5xl text-3xl">18+</h2>
        <span className="md:text-base text-sm text-green-base">
          Years Experience
        </span>
      </div>
      <div className="flex flex-col items-center text-center">
        <h2 className="font-bold md:text-5xl text-3xl">10.2k+</h2>
        <span className="md:text-base text-sm text-green-base">
          Worldwide Clients
        </span>
      </div>
    </div>
  );
};

export default Banner;
