"use client";

import { useRouter } from "next/navigation";
import { ArrowCurveLeftUp } from "@/src/assets/icon/ArrowCurveLeftUp";

const EarlyAccess = () => {
  const router = useRouter();
  return (
    <div className="h-screen flex items-center container text-white">
      <div className="w-full">
        <button
          className="bg-primary rounded-tl-[24px] rounded-br-[24px] py-3 px-[32px]"
          onClick={() => router.push("/")}
        >
          <ArrowCurveLeftUp />
        </button>
        <div className="mt-4 backdrop-blur-[40px] border-white border rounded-tl-[40px] rounded-br-[40px] w-full py-20">
          <div className="text-center text-[60px] font-semibold text-white">
            Earn Points
          </div>
          <div className="mt-20 px-20 grid gap-y-10">
            <div className="flex justify-between items-center">
              <div className="grid">
                <div className="text-[16px] font-medium">OPTIONAL</div>
                <div className="font-medium text-[24px]">Claim rewards</div>
              </div>
              <div className="flex items-center gap-x-4">
                <button className="py-3 px-[32px] font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px]">
                  A
                </button>
                <button className="py-3 px-[32px] font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px]">
                  A
                </button>
                <button className="py-3 px-[32px] font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px]">
                  A
                </button>
                <button className="py-3 px-[32px] font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px]">
                  A
                </button>
                <button className="py-3 px-[32px] font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px]">
                  A
                </button>
                <button className="py-3 px-[32px] font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px]">
                  A
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-medium text-[24px]">Follow Twitter</div>
              <button className="py-3 w-[220px] transition hover:translate-x-1 hover:-translate-y-1 font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px] shadow-md shadow-primary/50">
                VERIFY
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-medium text-[24px]">
                Turn on notifications
              </div>
              <button className="py-3 w-[220px] transition hover:translate-x-1 hover:-translate-y-1 font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px] shadow-md shadow-primary/50">
                VERIFY
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-medium text-[24px]">Connect Wallet</div>
              <button className="py-3 w-[220px] transition hover:translate-x-1 hover:-translate-y-1 font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px] shadow-md shadow-primary/50">
                CONNECT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;
