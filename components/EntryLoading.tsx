"use client";

import React, { useEffect, useRef } from "react";
import VantaFog from "./VantaFog"; // your client VantaFog component
import VantaBirds from "./VantaBirds"; // your client VantaBirds component

export default function EntryLoadingClient() {
  const hideTimeout = useRef<number | null>(null);

  useEffect(() => {
    // Safety: ensure code runs only in browser
    if (typeof window === "undefined") return;

    const loaderEl = document.getElementById("entry-loader");
    const appEl = document.getElementById("app-content");

    // If loader or app element not found, bail out safely
    if (!loaderEl || !appEl) return;

    // First: ensure app remains hidden (should already be hidden via CSS)
    appEl.classList.remove("visible");

    // Set the duration and delay you want
    const DISPLAY_MS = 0; // how long loader shows before starting fade
    const FADE_MS = 0; // must match CSS transition on #entry-loader

    // const DISPLAY_MS = 2000; // how long loader shows before starting fade
    // const FADE_MS = 1250; // must match CSS transition on #entry-loader

    // Start the timeout to hide the loader
    hideTimeout.current = window.setTimeout(() => {
      // Add the hidden class to fade out loader (CSS handles transition)
      loaderEl.classList.add("entry-hidden");

      // After the fade finishes (FADE_MS), show the app content
      window.setTimeout(() => {
        appEl.classList.add("visible");
        // optionally remove the loader from DOM after a bit
        window.setTimeout(() => {
          // remove loader entirely to free memory / canvases
          loaderEl.remove();
        }, 500);
      }, FADE_MS);
    }, DISPLAY_MS);

    // Cleanup on unmount (safety)
    return () => {
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, []);

  // VantaFog and VantaBirds are client-only components that mount inside this DOM.
  // Render them inside the server-rendered loader so canvases will replace the fallback
  return (
    <>
      {/* These mount into the already-server-rendered loader and draw on top of the fallback */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <VantaFog />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <VantaBirds />
      </div>
    </>
  );
}
