"use client";
import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false }
);

export function GlobeDemo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">

      {/* size controlled here on the wrapper, not on DotLottieReact */}
      <div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: "60%", height: "auto", aspectRatio: "1/1" }}
      >
        <DotLottieReact
          src="https://lottie.host/b2294b36-d9bf-4569-afbc-b78b7d14e2f2/m1b4q2bOLG.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#04071D] pointer-events-none z-10" />
    </div>
  );
}