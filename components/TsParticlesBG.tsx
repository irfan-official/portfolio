"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function TsParticlesBG() {
  const init = useCallback(async (engine: Engine) => {
    // loads the slim package (very small bundle)
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Particles
        id="tsparticles"
        init={init}
        options={{
          background: {
            color: "#000000",
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
          },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },

            color: { value: "#9d1bd2" }, // particle color (violet)

            links: {
              enable: true,
              color: "#9d1bd2", // line color (violet)
              distance: 150,
              opacity: 0.5,
              width: 1.2,
            },

            move: {
              enable: true,
              speed: 1.2,
            },

            opacity: { value: 0.7 },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
