"use client";

export const Community = () => {
  return (
    <div className="text-white container grid md:grid-cols-2 grid-cols-1 items-center pb-[100px]">
      <div className="text-[60px] font-bold">Our Community</div>
      <div className="grid grid-cols-3 gap-x-4">
        <button className="py-3 px-[32px] transition hover:translate-x-1 hover:-translate-y-1 font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px] shadow-md shadow-primary/50">
          X.COM
        </button>
        <button className="py-3 px-[32px] transition hover:translate-x-1 hover:-translate-y-1 font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px]  shadow-md shadow-primary/50">
          TELEGRAM
        </button>
        <button className="py-3 px-[32px] transition hover:translate-x-1 hover:-translate-y-1 font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px]  shadow-md shadow-primary/50">
          DISCORD
        </button>
      </div>
    </div>
  );
};
