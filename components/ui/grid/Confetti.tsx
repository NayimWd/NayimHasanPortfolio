"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export default function Confetti() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    import("@/data/confetti.json").then((mod) => {
      setData(mod.default);
    });
  }, []);

  if (!data) return null;

  return (
    <Lottie
      animationData={data}
      loop={false}
      autoplay
      style={{ height: 200, width: 400 }}
    />
  );
}