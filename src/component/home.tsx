"use client";

import { Introduction } from "@/src/sections/Introduction";
import { ProjectMarketers } from "@/src/sections/project-marketers";
import { KeyOpinionLeaders } from "@/src/sections/key-opinion-leaders";
import { Community } from "@/src/sections/Community";
import { Community2 } from "@/src/sections/Community2";
import { Footer } from "@/src/sections/Footer";

export const LandingPage = () => {
  return (
    <div className="md:pb-[100px] pb-[50px]">
      <Introduction />
      <ProjectMarketers />
      <KeyOpinionLeaders />
      <Community2 />
      {/*<Community />*/}
      <Footer />
    </div>
  );
};
