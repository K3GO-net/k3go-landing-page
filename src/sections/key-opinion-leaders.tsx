"use client";

import Cone05 from "@/src/assets/images/cone05.png";

export const KeyOpinionLeaders = () => {
  return (
    <div className="container grid md:grid-cols-2 grid-cols-1 gap-x-6 my-[64px] items-center">
      <div className="text-white">
        <div className="text-[50px] font-semibold">
          Key Opinion <span className="text-primary">Leaders</span>
        </div>
        <div className="font-light text-[20px]">
          Amplify and reach like never before. Easily discover and collaborate
          with verified KOLs that share your ethos. Connect with worldwide
          communities with ease. Trust is guaranteed through K3's escrow payment
          and dispute resolution system.
        </div>
      </div>
      <div className="flex justify-end">
        <img src={Cone05.src} />
      </div>
    </div>
  );
};
