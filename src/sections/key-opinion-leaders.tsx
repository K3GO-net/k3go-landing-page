"use client";

import Cone05 from "@/src/assets/images/cone05.png";

export const KeyOpinionLeaders = () => {
  return (
    <div className="container grid md:grid-cols-2 grid-cols-1 gap-x-6 my-[64px] items-center">
      <div className="text-white">
        <div className="text-[50px] font-semibold">
          Key Opinion <span className="text-primary">Leaders</span>
        </div>
        <div className="font-light text-[20px]">
          Enhance visibility for your services across global web3 projects,
          optimizing collaboration and revenue. KOL3 ensures secure transactions
          for timely payments. <br /> Monetize your community base by selling
          keys and sharing gig fees, incentivizing your followers to amplify
          collaborations.
        </div>
      </div>
      <div className="flex justify-end">
        <img src={Cone05.src} />
      </div>
    </div>
  );
};
