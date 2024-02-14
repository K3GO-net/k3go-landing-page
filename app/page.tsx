"use client";

import { Introduction } from "@/src/sections/Introduction";
import { ProjectMarketers } from "@/src/sections/project-marketers";
import { Community } from "@/src/sections/Community";
import { KeyOpinionLeaders } from "@/src/sections/key-opinion-leaders";

export default function Home() {
  return (
    <div className="">
      <Introduction />
      <ProjectMarketers />
      <KeyOpinionLeaders />
      <Community />
    </div>
  );
}
