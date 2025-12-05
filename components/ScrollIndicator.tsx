"use client";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollTop / height) * 100;
      setPercent(Math.round(scrolled));
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-[60vh] w-2 bg-gray-300 rounded-full relative z-[9999]">
      {/* filled bar */}
      <div
        className="absolute w-full bg-blue-500 rounded-full"
        style={{ height: `${percent}%`, bottom: 0 }}
      />

      {/* circle showing percentage */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bg-white border border-gray-400 rounded-full h-10 w-10 flex items-center justify-center text-sm font-bold shadow"
        style={{ bottom: `${percent}%` }}
      >
        {percent}%
      </div>
    </div>
  );
}
