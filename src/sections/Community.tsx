"use client";

import { GroupLine } from "@/src/assets/icon/GroupLine";

export const Community = () => {
  return (
    <div className="flex items-center justify-center my-[100px] text-white">
      <div className="relative">
        <GroupLine />
        <div className="absolute top-0 w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-[50px] font-medium ">Join the Community</div>
            <div className="mt-3 text-[16px]">
              Engage in the shared economy with Kol3's true socialFi feature.{" "}
              Identify and <br /> endorse emerging talents, or reap the benefits
              of backing established KOL's. <br /> Buy and sell{" "}
              <span className="font-bold">keys</span> from your preferred Key
              Opinion Leaders, <br /> and unlock their gig revenue share while
              accruing EHT staking rewards.
            </div>
            <div className="mt-10">
              <button className="py-6 px-[42px] rounded-full bg-primary font-semibold text-[20px] text-black">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
