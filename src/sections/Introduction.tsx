"use client";

import Cone03 from "@/src/assets/images/cone03.png";
import Cone04 from "@/src/assets/images/cone04.png";
import LogoGlow from "@/src/assets/images/logo.png";
import useInView from "@/src/hooks/useInView";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Introduction = () => {
  const { isInView, ref } = useInView();
  const [isAtBottom, setIsAtBottom] = useState(false);

  const checkScrollBottom = () => {
    // For window scrolling
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const height = document.documentElement.scrollHeight;

    // Check if the user is at the bottom of the page
    if (windowHeight + scrollTop === height) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollBottom);

    return () => {
      window.removeEventListener("scroll", checkScrollBottom);
    };
  }, []);
  const router = useRouter();
  return (
    <>
      <div className="flex items-center gap-x-14 relative min-h-[80dvh]">
        <div className="absolute top-0 left-0 md:flex hidden 2xl:w-[436px] xl:w-[350px] md:w-[200px] aspect-square">
          <img className="w-full h-full" src={Cone03.src} />
        </div>
        <div className="absolute bottom-0 right-0 md:flex hidden 2xl:w-[436px] xl:w-[350px] md:w-[200px] aspect-square">
          <img className="w-full h-full" src={Cone04.src} />
        </div>
        <div className="w-full text-white container">
          <div className="flex justify-center">
            <img src={LogoGlow.src} alt="main logo" width={200} height={200} />
          </div>
          <div className="text-[60px] font-semibold leading-[75px] text-center">
            Join K3GO, home of the KOL.
          </div>
          <div className="mt-[30px] text-[20px] font-light text-center">
            Collab with projects you believe in. Share success with your <br />
            community. Grow like never before.
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
      {!isInView && !isAtBottom && (
        <div className="fixed md:bottom-16 bottom-5 left-1/2 -translate-x-1/2 text-white">
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
