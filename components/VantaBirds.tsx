"use client";

import { useEffect, useRef } from "react";
import { loadScript } from "../lib/loadScript";

const THREE_CDN =
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
const VANTA_BIRDS_CDN =
  "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js";

export default function VantaBirds() {
  const ref = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ref.current) return;
    if (effectRef.current) return;

    async function init() {
      try {
        // Load global THREE first
        await loadScript(THREE_CDN);

        // Then load Birds
        await loadScript(VANTA_BIRDS_CDN);

        const VANTA = (window as any).VANTA;
        const THREE = (window as any).THREE;

        if (!VANTA?.BIRDS || !THREE) {
          console.error("Vanta Birds or THREE not loaded");
          return;
        }

        effectRef.current = VANTA.BIRDS({
          el: ref.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          backgroundAlpha: 0,

          // your styling
          color1: 0xeb0096,
          color2: 0x3c5257,
          quantity: 5,
          birdSize: 1.0,
          wingSpan: 40,
          speedLimit: 10,
        });
      } catch (err) {
        console.error("Birds failed to initialize", err);
      }
    }

    init();

    return () => {
      try {
        effectRef.current?.destroy?.();
      } catch {}
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
