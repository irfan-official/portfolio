"use client";

import { useEffect, useRef, useState } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import * as THREE from "three";

export default function FooterVanta() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let p5Instance: any = null;

    async function initVanta() {
      const p5 = (await import("p5")).default; // ✅ load p5 only on client
      p5Instance = p5;

      if (!vantaEffect && vantaRef.current) {
        const effect = TOPOLOGY({
          el: vantaRef.current,
          THREE,
          p5: p5Instance, // MUST pass p5 instance

          // Your custom settings
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,

          color: 0xc300ff,
          backgroundColor: 0x000000,
        });

        setVantaEffect(effect);
      }
    }

    initVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="w-full h-full absolute top-0 left-0 -z-[2]"
    ></div>
  );
}
