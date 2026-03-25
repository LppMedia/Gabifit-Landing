/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "brand-neon": "#cff154",
        "brand-purple": "#c4b5fd",
        "brand-black": "#000000",
        "brand-white": "#ffffff",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#cff154",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          foreground: "rgba(255, 255, 255, 0.6)",
        },
      },
      boxShadow: {
        neon: "10px 10px 0px #cff154",
        purple: "10px 10px 0px #c4b5fd",
        white: "8px 8px 0px #ffffff",
      },
    },
  },
  plugins: [],
}
