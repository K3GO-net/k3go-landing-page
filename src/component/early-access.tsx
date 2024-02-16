"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { ArrowCurveLeftUp } from "@/src/assets/icon/ArrowCurveLeftUp";
import { TwitterShareButton } from "react-share";
import { ButtonConnectCustom } from "@/src/shared/Button/ButtonConnectCustom";

export const EarlyAccess = () => {
  const router = useRouter();
  const [inviteCode, setInviteCode] = useState("");
  const [isShared, setIsShared] = useState(false);
  const handleChangeCode = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    setInviteCode((oldValue) => {
      const newValue = oldValue.split("");
      newValue[index] = e.target.value;
      return newValue.join("");
    });
    const nextInput = document.getElementById(`input-${index + 2}`);
    if (nextInput) {
      nextInput.focus();
    }
  };

  const handleEnableNotification = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  };
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
            Earn Point
          </div>
          <div className="text-[18px] italic text-center font-light">
            (Coming soon, stay tuned)
          </div>
          <div className="mt-20 md:px-20 px-4 grid gap-y-10">
            <div className="md:flex grid justify-between items-center">
              <div className="grid">
                <div className="font-medium text-[24px]">
                  Input Invitation Code
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <input
                  id="input-1"
                  value={inviteCode?.split("")[0] || ""}
                  onChange={(e) => handleChangeCode(e, 0)}
                  maxLength={1}
                  className="bg-transparent md:py-3 py-2 font-medium text-center md:text-[16px] text-[14px] border border-primary/50 md:rounded-tl-[24px] rounded-tl-[16px] md:rounded-br-[24px] rounded-br-[16px] outline-none md:w-[60px] w-[40px]"
                ></input>
                <input
                  id="input-2"
                  value={inviteCode?.split("")[1] || ""}
                  onChange={(e) => handleChangeCode(e, 1)}
                  maxLength={1}
                  className="bg-transparent md:py-3 py-2 font-medium text-center md:text-[16px] text-[14px] border border-primary/50 md:rounded-tl-[24px] rounded-tl-[16px] md:rounded-br-[24px] rounded-br-[16px] outline-none md:w-[60px] w-[40px]"
                ></input>
                <input
                  id="input-3"
                  value={inviteCode?.split("")[2] || ""}
                  onChange={(e) => handleChangeCode(e, 2)}
                  maxLength={1}
                  className="bg-transparent md:py-3 py-2 font-medium text-center md:text-[16px] text-[14px] border border-primary/50 md:rounded-tl-[24px] rounded-tl-[16px] md:rounded-br-[24px] rounded-br-[16px] outline-none md:w-[60px] w-[40px]"
                ></input>
                <input
                  id="input-4"
                  value={inviteCode?.split("")[3] || ""}
                  onChange={(e) => handleChangeCode(e, 3)}
                  maxLength={1}
                  className="bg-transparent md:py-3 py-2 font-medium text-center md:text-[16px] text-[14px] border border-primary/50 md:rounded-tl-[24px] rounded-tl-[16px] md:rounded-br-[24px] rounded-br-[16px] outline-none md:w-[60px] w-[40px]"
                ></input>
                <input
                  id="input-5"
                  value={inviteCode?.split("")[4] || ""}
                  onChange={(e) => handleChangeCode(e, 4)}
                  maxLength={1}
                  className="bg-transparent md:py-3 py-2 font-medium text-center md:text-[16px] text-[14px] border border-primary/50 md:rounded-tl-[24px] rounded-tl-[16px] md:rounded-br-[24px] rounded-br-[16px] outline-none md:w-[60px] w-[40px]"
                ></input>
                <input
                  id="input-6"
                  value={inviteCode?.split("")[5] || ""}
                  onChange={(e) => handleChangeCode(e, 5)}
                  maxLength={1}
                  className="bg-transparent md:py-3 py-2 font-medium text-center md:text-[16px] text-[14px] border border-primary/50 md:rounded-tl-[24px] rounded-tl-[16px] md:rounded-br-[24px] rounded-br-[16px] outline-none md:w-[60px] w-[40px]"
                ></input>
              </div>
            </div>
            <div className="md:flex grid justify-between items-center">
              <div className="font-medium text-[24px]">Follow Twitter</div>
              <TwitterShareButton
                onClick={() => setIsShared(true)}
                url={"kol3-nextjs.vercel.app"}
              >
                <div className="py-3 w-[220px] transition hover:translate-x-1 hover:-translate-y-1 font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px] shadow-md shadow-primary/50">
                  {!isShared ? "GO TO TWITTER" : "VERIFY"}
                </div>
              </TwitterShareButton>
            </div>
            <div className="md:flex grid justify-between items-center">
              <div className="font-medium text-[24px]">
                Turn on notifications
              </div>
              <button
                onClick={() => handleEnableNotification()}
                className="py-3 w-[220px] transition hover:translate-x-1 hover:-translate-y-1 font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px] shadow-md shadow-primary/50"
              >
                VERIFY
              </button>
            </div>
            <div className="md:flex grid justify-between items-center">
              <div className="font-medium text-[24px]">Connect Wallet</div>
              <ButtonConnectCustom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
