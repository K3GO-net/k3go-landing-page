import { NFTIcons, NFTIcons2 } from "@/src/assets/icon/NFTICons";
import { Google } from "@/src/assets/icon/Google";
import { Twitter } from "@/src/assets/icon/Twitter";
import { Instagram } from "@/src/assets/icon/Instagram";
import { LikedIn } from "@/src/assets/icon/LikedIn";
import { Youtube } from "@/src/assets/icon/Youtube";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black font-exo">
      <header className="pt-[30px] container">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <NFTIcons />
            <div className="text-[23px] font-semibold text-white">KOL3</div>
          </div>
          <button className="bg-primary py-[15px] px-[30px] rounded-full text-[16px] leading-5 font-bold">
            Join Early Access
          </button>
        </header>
      </header>
      <div>{children}</div>
      <footer>
        <div className="container flex justify-between py-[60px] text-white">
          <div>
            <div className="flex gap-x-3 items-center">
              <NFTIcons2 />
              <div className="text-[42px] font-bold">KOL3</div>
            </div>
            <div className="mt-12 text-[24px] font-semibold">
              Join KOL3 Community
            </div>
            <div className="mt-3 flex gap-x-4">
              <div className="flex items-center justify-center w-[75px] h-[75px] rounded-[20px] bg-white/5">
                <Google />
              </div>
              <div className="flex items-center justify-center w-[75px] h-[75px] rounded-[20px] bg-white/5">
                <Twitter />
              </div>
              <div className="flex items-center justify-center w-[75px] h-[75px] rounded-[20px] bg-white/5">
                <Instagram />
              </div>
              <div className="flex items-center justify-center w-[75px] h-[75px] rounded-[20px] bg-white/5">
                <LikedIn />
              </div>
              <div className="flex items-center justify-center w-[75px] h-[75px] rounded-[20px] bg-white/5">
                <Youtube />
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-[25px] font-semibold">Community</div>
            <div className="mt-[18px] grid gap-y-5">
              <div>About</div>
              <div>Blog</div>
              <div>Join Early Access</div>
            </div>
          </div>
          <div className="">
            <div className="text-[25px] font-semibold">Community</div>
            <div className="mt-[18px] grid gap-y-5">
              <div>About</div>
              <div>Blog</div>
              <div>Join Early Access</div>
            </div>
          </div>
        </div>
        <div className="bg-primary text-center py-[14px] text-[18px] font-medium">
          © 2024 KOL3 @ All Rights Reserved
        </div>
      </footer>
    </div>
  );
};
