"use client";

import Cone02 from "@/src/assets/images/cone02.png";

export const Community2 = () => {
  return (
    <div className="container grid md:grid-cols-2 grid-cols-1 gap-x-6 items-center">
      <div className="flex justify-start">
        <img src={Cone02.src} />
      </div>
      <div className="text-white">
        <div className="text-[50px] font-semibold">
          <span className="text-primary">Community</span>
        </div>
        <div className="font-light text-[20px]">
          Engage in the shared economy with K3GO's true{" "}
          <span className="font-semibold">socialFi</span>. Endorse who you
          follow, discover emerging experts, and reap the benefits of backing
          established profiles. By getting Keys from your preferred KOL's, you
          can trade and unlock their collab revenue share.
        </div>
      </div>
    </div>
  );
};
