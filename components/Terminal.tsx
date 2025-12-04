"use client";

import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

export default function MyTerminal() {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const hasMountedRef = useRef(false); // Prevent double init
  const inputRef = useRef(""); // Store current input safely

  useEffect(() => {
    if (hasMountedRef.current) return; // Prevent double init (StrictMode)
    hasMountedRef.current = true;

    const term = new Terminal({
      cursorBlink: true,
      fontSize: 15,
      fontFamily: "monospace",
      theme: {
        background: "#a300fb00",
        foreground: "#E5E5E5",
        cursor: "#00FF00",
      },
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    term.open(terminalRef.current!);
    fitAddon.fit();

    const prompt = "irfans.dev@ ~ $ ";

    term.write("Welcome to Irfan's Terminal\r\n");
    term.write(prompt);

    // Terminal key handling
    term.onData((data) => {
      const char = data;

      // CTRL + C
      if (char === "\u0003") {
        term.write("^C\r\n");
        term.write(prompt);
        inputRef.current = "";
        return;
      }

      // ENTER
      if (char === "\r") {
        const printedPrompt = runCommand(inputRef.current, term);
        inputRef.current = "";

        if (!printedPrompt) {
          term.write("irfans.dev@ ~ $ ");
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

      // Regular character
      inputRef.current += char;
      term.write(char);
    });
  }, []);

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
        term.write("\r\n");
        return false;

      case "clear":
        // Remove the current line, including typed characters
        term.write("\x1b[2K\x1b[0G");

        // Clear terminal viewport
        term.clear();

        // Move cursor to top-left
        term.write("\x1b[H");

        // Reset input
        inputRef.current = "";

        // Print prompt
        term.write(prompt);

        return true; // don't print another prompt

      default:
        term.write(`\r\nCommand not found: ${cmd}\r\n`);
        return false;
    }
  }

  return (
    <div
      className="rounded-lg border border-white/20 pl-2 pt-2 bg-[#a300fb4e] backdrop-blur-[2px]"
      ref={terminalRef}
      style={{
        width: "100%",
        height: "500px",
      }}
    />
  );
}
