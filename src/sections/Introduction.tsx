"use client";

import Cone03 from "@/src/assets/images/cone03.png";
import Cone04 from "@/src/assets/images/cone04.png";
import useInView from "@/src/hooks/useInView";
import { useRouter } from "next/navigation";

export const Introduction = () => {
  const { isInView, ref } = useInView();
  const router = useRouter();
  return (
    <>
      <div className="flex items-center gap-x-14 relative min-h-[80dvh]">
        <div className="absolute top-0 left-0 md:flex hidden">
          <img src={Cone03.src} width={436} height={436} />
        </div>
        <div className="absolute bottom-0 right-0 md:flex hidden">
          <img src={Cone04.src} width={436} height={436} />
        </div>
        <div className="w-full text-white container">
          <div className="text-primary font-semibold text-[60px] text-center">
            KOL3
          </div>
          <div className="text-[60px] font-semibold leading-[75px] text-center">
            KOL3 - The Web3 Influence <br /> Marketplace
          </div>
          <div className="mt-[30px] text-[20px] font-light text-center">
            Amplify and reach like never before <br />
            The collaborative economy redifined with true SocialFi
          </div>
          <div ref={ref} className="mt-[30px] flex justify-center gap-x-5">
            <button
              onClick={() => router.push("/early-access")}
              className="py-5 px-[42px] bg-primary border-transparent border text-[20px] font-medium text-black rounded-tl-[36px] rounded-br-[36px] shadow-md shadow-primary/50"
            >
              Join Early Access
            </button>
          </div>
        </div>
      </div>
      {!isInView && (
        <div className="fixed md:bottom-8 bottom-5 left-1/2 -translate-x-1/2 text-white">
          <div className="flex justify-center p-2 bg-primary/30 rounded-full">
            <button
              onClick={() => router.push("/early-access")}
              className="bg-primary md:px-[42px] px-3 md:py-3 py-2 border-transparent border md:text-[20px] text-[16px] font-medium text-black rounded-full shadow-md shadow-primary/50"
            >
              Join Early Access
            </button>
          </div>
        </div>
      )}
    </>
  );
};
