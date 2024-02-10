"use client";

import Bird from "@/src/assets/images/bird.png";

export const Introduction = () => {
  return (
    <div className="container flex justify-between gap-x-14">
      <div className="w-1/2 text-white">
        <div className="text-[60px] font-semibold leading-[75px]">
          KOL3 - The Web3 influence marketplace
        </div>
        <div className="mt-[30px] text-[20px] font-light">
          Amplify and reach like never before <br />
          The collaborative economy redifined with true SocialFi
        </div>
        <div className="mt-14 flex justify-between">
          <div>
            <div className="font-bold text-[48px]">1K+</div>
            <div className="mt-5 text-[20px] font-medium">Influence</div>
          </div>
          <div>
            <div className="font-bold text-[48px]">10K+</div>
            <div className="mt-5 text-[20px] font-medium">Users</div>
          </div>
          <div>
            <div className="font-bold text-[48px]">50K+</div>
            <div className="mt-5 text-[20px] font-medium">Projects</div>
          </div>
        </div>
        <div className="mt-[132px] flex gap-x-5">
          <button className="py-5 px-[42px] bg-primary border-transparent border text-[20px] font-medium text-black rounded-tl-[36px] rounded-br-[36px] backdrop-blur-[24px]">
            Join Early Access
          </button>
        </div>
      </div>
      <div className="w-1/2 relative">
        <div className="absolute top-0 w-full aspect-square rounded-full bg-white/5 flex items-center justify-center z-20">
          <img className="absolute top-0" src={Bird.src} />
        </div>
      </div>
    </div>
  );
};
