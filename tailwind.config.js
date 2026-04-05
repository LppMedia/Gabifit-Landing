/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-oswald)", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
        sans: ["var(--font-space-grotesk)", "sans-serif"],
      },
      colors: {
        "brand-neon": "#cff154",
        "brand-purple": "#c4b5fd",
        "brand-black": "#000000",
        "brand-white": "#ffffff",
      },
    },
  },
  plugins: [],
};
