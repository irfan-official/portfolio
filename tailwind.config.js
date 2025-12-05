module.exports = {
  darkMode: false, // ⛔ always light mode
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        signature: {
          "0%": { strokeDashoffset: "10000", visibility: "visible" },
          "100%": { strokeDashoffset: "0", visibility: "visible" },
        },
      },
      animation: {
        signature: "signature 5s linear forwards",
      },
    },
  },
  plugins: [],
};
