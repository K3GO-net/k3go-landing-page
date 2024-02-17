"use client";
import LogoGlow from "@/src/assets/images/logo-glow.webp";

export const Footer = () => {
  return (
    <div className="container md:flex grid gap-x-4 justify-center items-center text-white mt-[100px]">
      <img width={300} height={60} src={LogoGlow.src} />
      <div className="md:text-[48px] text-[20px] text-center">
        Leveraging BLAST Native Features
      </div>
    </div>
  );
};
