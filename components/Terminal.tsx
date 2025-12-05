"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

interface LinkOverlay {
  label: string;
  id: string;
  top: number;
  left: number;
  width: number;
  height: number;
}

export default function MyTerminal() {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasMountedRef = useRef(false);
  const inputRef = useRef("");
  const termInstanceRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const [linkOverlays, setLinkOverlays] = useState<LinkOverlay[]>([]);
  const linkPositionsRef = useRef<LinkOverlay[]>([]);

  useEffect(() => {
    if (hasMountedRef.current) return;
    hasMountedRef.current = true;

    const term = new Terminal({
      cursorBlink: true,
      fontSize: 15,
      fontFamily: "monospace",
      theme: {
        background: "#a300fb00",
        foreground: "#E5E5E5",
        cursor: "#fb00ff",
      },
      allowProposedApi: true,
    });

    termInstanceRef.current = term;

    const fitAddon = new FitAddon();
    fitAddonRef.current = fitAddon;
    term.loadAddon(fitAddon);

    term.open(terminalRef.current!);
    fitAddon.fit();

    const prompt = "irfans.dev@ ~ $ ";

    term.write("Welcome to Irfan's Terminal\r\n");
    term.write(prompt);

    // Typing animation
    setTimeout(() => {
      typeEffect(term, "Hello, how can I help you?");
    }, 1500);

    // USER INPUT HANDLER
    term.onData((data) => {
      const char = data;

      // Ctrl + C
      if (char === "\u0003") {
        term.write("^C\r\n");
        term.write(prompt);
        inputRef.current = "";
        return;
      }

      // ENTER
      if (char === "\r") {
        const printed = runCommand(inputRef.current, term);
        inputRef.current = "";

        if (!printed) {
          term.write(prompt);
        }
        return;
      }

      // BACKSPACE
      if (char === "\u007F") {
        if (inputRef.current.length > 0) {
          inputRef.current = inputRef.current.slice(0, -1);
          term.write("\b \b");
        }
        return;
      }

      // Normal character
      inputRef.current += char;
      term.write(char);
    });

    // Handle window resize
    const handleResize = () => {
      if (fitAddonRef.current) {
        fitAddonRef.current.fit();
        // Recalculate overlay positions after resize
        setTimeout(() => {
          recalculateOverlays();
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function typeEffect(term: Terminal, text: string, min = 30, max = 90) {
    let i = 0;

    function typeNext() {
      if (i < text.length) {
        term.write(text[i]);
        i++;
        const delay = Math.floor(Math.random() * (max - min + 1)) + min;
        setTimeout(typeNext, delay);
      } else {
        term.write("\r\n");
        runCommand("about", term);
        term.write("irfans.dev@ ~ $ ");
      }
    }

    typeNext();
  }

  function recalculateOverlays() {
    const routes = [
      { label: "About_Me", id: "about-section" },
      { label: "Skills", id: "skills-section" },
      { label: "Learning_Timeline", id: "timeline-section" },
      { label: "Projects", id: "projects-section" },
      { label: "Contact_With_Me", id: "contact-section" },
    ];

    const overlays: LinkOverlay[] = [];
    const textSpans = terminalRef.current?.querySelectorAll(".xterm-rows span");

    if (textSpans) {
      textSpans.forEach((span) => {
        const text = span.textContent?.trim();
        const matchedRoute = routes.find((route) => text === route.label);

        if (matchedRoute) {
          const element = span as HTMLElement;
          const rect = element.getBoundingClientRect();
          const containerRect = containerRef.current?.getBoundingClientRect();

          if (containerRect) {
            overlays.push({
              label: matchedRoute.label,
              id: matchedRoute.id,
              top: rect.top - containerRect.top,
              left: rect.left - containerRect.left,
              width: rect.width,
              height: rect.height,
            });
          }
        }
      });
    }

    linkPositionsRef.current = overlays;
    setLinkOverlays(overlays);
  }

  function runCommand(cmd: string, term: Terminal): boolean {
    const prompt = "irfans.dev@ ~ $ ";

    switch (cmd.trim()) {
      case "":
        term.write("\r\n");
        return false;

      case "help":
        term.write("\r\nAvailable commands:\r\n");
        term.write("help  - show commands\r\n");
        term.write("clear - clear terminal\r\n");
        term.write("about - show sections\r\n");
        term.write("\r\n");
        return false;

      case "about":
        term.write("\r\nAvailable Routes:\r\n");

        const routes = [
          { label: "About_Me", id: "about-section" },
          { label: "Skills", id: "skills-section" },
          { label: "Learning_Timeline", id: "timeline-section" },
          { label: "Projects", id: "projects-section" },
          { label: "Contact_With_Me", id: "contact-section" },
        ];

        routes.forEach((route) => {
          // Write with ANSI codes: underline + purple color
          term.write("\x1b[4m\x1b[38;5;141m" + route.label + "\x1b[0m\r\n");
        });

        // Calculate overlays after writing
        setTimeout(() => {
          recalculateOverlays();
        }, 150);

        term.write("\r\n");
        return true;

      case "clear":
        term.write("\x1b[2J\x1b[H");
        inputRef.current = "";
        linkPositionsRef.current = [];
        setLinkOverlays([]);
        term.write(prompt);
        return true;

      default:
        term.write(`\r\nCommand not found: ${cmd}\r\n`);
        return false;
    }
  }

  const handleLinkClick = (targetId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Navigate to section
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative hidden lg:block"
      style={{ width: "100%", height: "500px" }}
    >
      <div
        ref={terminalRef}
        className="rounded-lg relative border border-white/20 pl-2  pt-2 bg-[#320e4692] backdrop-blur-[2px]"
        style={{
          width: "100%",
          height: "100%",
        }}
      />

      {/* Link overlays */}
      {linkOverlays.map((overlay, index) => (
        <div
          key={`${overlay.label}-${index}`}
          onClick={(e) => handleLinkClick(overlay.id, e)}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onMouseUp={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(157, 75, 255, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
          style={{
            position: "absolute",
            // background: "#fff",
            top: overlay.top,
            left: overlay.left,
            // right: overlay.right,
            width: "95%",
            height: overlay.height,
            cursor: "pointer",
            zIndex: 1000,
            pointerEvents: "auto",
          }}
          title={`Go to ${overlay.label}`}
        />
      ))}
    </div>
  );
}
