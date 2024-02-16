"use client";

import Cone01 from "@/src/assets/images/cone01.png";

export const ProjectMarketers = () => {
  return (
    <div className="container grid md:grid-cols-2 grid-cols-1 gap-x-6 items-center">
      <div className="flex justify-start">
        <img src={Cone01.src} />
      </div>
      <div className="text-white">
        <div className="text-[50px] font-semibold">
          <span className="text-primary">Project</span> Marketers
        </div>
        <div className="font-light text-[20px]">
          This is your home, your space. Connect and collab with Web3 projects
          that share your values. K3GO has you covered with secure and timely
          transactions. Make your community participants of your success. With
          revenue share, you grow, and they grow with you.
        </div>
      </div>
    </div>
  );
};
