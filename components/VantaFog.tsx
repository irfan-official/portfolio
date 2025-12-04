"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { loadScript } from "../lib/loadScript";

const VANTA_FOG_CDN =
  "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js";

export default function VantaFog() {
  const ref = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ref.current) return;
    // If already initialised do nothing
    if (instanceRef.current) return;

    let mounted = true;

    async function init() {
      try {
        // load the script (cached)
        await loadScript(VANTA_FOG_CDN);

        // ensure VANTA is available
        const VANTA = (window as any).VANTA;
        if (!VANTA || !VANTA.FOG) {
          console.error("VANTA.FOG not available.");
          return;
        }

        // init fog
        instanceRef.current = VANTA.FOG({
          el: ref.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          highlightColor: 0x000000,
          midtoneColor: 0x000000,
          lowlightColor: 0x000000,
          baseColor: 0x732789,
          blurFactor: 0.6,
          zoom: 1.0,
          speed: 1.0,
        });
      } catch (err) {
        console.error("Failed to load Vanta.FOG", err);
      }
    }

    init();

    return () => {
      mounted = false;
      try {
        if (
          instanceRef.current &&
          typeof instanceRef.current.destroy === "function"
        ) {
          instanceRef.current.destroy();
          instanceRef.current = null;
        }
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, []);

  return <div ref={ref} className="absolute inset-0 w-full h-full -z-20" />;
}
