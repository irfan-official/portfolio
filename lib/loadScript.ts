// app/lib/loadScript.ts

// Use "Record<string, Promise<void>> | undefined"
const loaded: Record<string, Promise<void>> = {};

export function loadScript(src: string): Promise<void> {
  // FIX: Use "if (src in loaded)" instead of checking the value directly
  if (src in loaded) {
    return loaded[src];
  }

  loaded[src] = new Promise<void>((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("No window"));
      return;
    }

    // Check if script already exists in DOM
    const existing = document.querySelector(
      `script[src="${src}"]`
    ) as HTMLScriptElement | null;

    if (existing) {
      // Script already loaded
      if (existing.getAttribute("data-loaded") === "true") {
        resolve();
        return;
      }

      // Not loaded yet → wait
      existing.addEventListener("load", () => {
        existing.setAttribute("data-loaded", "true");
        resolve();
      });

      existing.addEventListener("error", () =>
        reject(new Error(`Failed to load script: ${src}`))
      );

      return;
    }

    // Create script
    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    script.onload = () => {
      script.setAttribute("data-loaded", "true");
      resolve();
    };

    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

    document.head.appendChild(script);
  });

  return loaded[src];
}
