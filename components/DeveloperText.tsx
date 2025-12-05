"use client";

import React from "react";

export default function VerticalLabel() {
  const word = "DEVELOPER";
  const letters = word.split("").reverse();

  return (
    <aside className="w-[100px] lg:w-[120px] h-screen  bg-gradient-to-r from-white/20 to-white/0 backdrop-blur-sm flex items-center justify-center">
      <h2
        className="text-[2.7rem] md:text-[4rem] lg:text-[4.25rem] font-extrabold text-gray-300/90 back leading-none"
        aria-hidden
      >
        {letters.map((ch, i) => (
          // spacing controlled by my-6 (margin y)
          <span key={i} className="block my-3 md:my-4 lg:my-6 -rotate-90 ">
            {ch}
          </span>
        ))}
      </h2>
    </aside>
  );
}
