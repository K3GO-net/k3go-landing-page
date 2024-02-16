"use client";
import LogoGlow from "@/src/assets/images/logo-glow.webp";

export const Footer = () => {
  return (
    <div className="container md:flex grid gap-x-4 justify-center items-center text-white">
      <img src={LogoGlow.src} />
      <div className="md:text-[48px] text-[24px]">
        Leveraging BLAST Native Features
      </div>
    </div>
  );
};
