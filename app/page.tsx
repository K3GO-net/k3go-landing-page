"use client";

import { Introduction } from "@/src/sections/Introduction";
import { ProjectMarketers } from "@/src/sections/project-marketers";
import { Community } from "@/src/sections/Community";

export default function Home() {
  return (
    <div className="mt-[100px]">
      <Introduction />
      <ProjectMarketers />
      <Community />
    </div>
  );
}
