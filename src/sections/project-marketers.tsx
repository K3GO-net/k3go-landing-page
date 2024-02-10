"use client";

import Cone01 from "@/src/assets/images/cone01.png";

export const ProjectMarketers = () => {
  return (
    <div className="container grid grid-cols-2 gap-x-6 mt-[150px] items-center">
      <div className="flex justify-start">
        <img src={Cone01.src} />
      </div>
      <div className="text-white">
        <div className="text-[50px] font-semibold">
          <span className="text-primary">Project</span> Marketers
        </div>
        <div className="font-light text-[20px]">
          Amplify your projects growth within target communities efficiently.
          KOL3 serves as a peer-to-peer marketplace, streamlining the discovery,
          connection, and collaboration process with verified Key Opinion
          Leaders. Trust and ease are guaranteed through our escrow payment and
          dispute resolution system.
        </div>
      </div>
    </div>
  );
};
