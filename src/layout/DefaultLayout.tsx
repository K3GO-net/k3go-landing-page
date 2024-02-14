"use client";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-exo relative">
      <div
        style={{
          width: "100%",
          background: "linear-gradient(to bottom left, #000, #123456)",
          backgroundAttachment: "fixed",
          overflow: "hidden",
        }}
        className="w-full h-full bg-center absolute top-0 z-[-2]"
      ></div>
      <div
        style={{
          position: "absolute",
          width: 650,
          height: 650,
          top: 0,
          right: 0,
          zIndex: -1,
        }}
        className="bg-[url('/background/shape1.png')] bg-center bg-cover md:flex hidden"
      />
      <div
        style={{
          position: "absolute",
          width: 650,
          height: 650,
          bottom: 0,
          left: 0,
          zIndex: -1,
        }}
        className="bg-[url('/background/shape2.png')] bg-cover bg-no-repeat md:flex hidden"
      />
      <div className="md:p-0 px-4">{children}</div>
    </div>
  );
};
