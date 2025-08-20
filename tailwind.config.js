/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Poppins"', "ui-sans-serif", "system-ui"],
        body: ['"Inter"', "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          50: "#eefdf5",
          100: "#d6f7e5",
          200: "#b0edce",
          300: "#7ddfaf",
          400: "#42cb8a",
          500: "#16b26a",
          600: "#0d8e55",
          700: "#0d7146",
          800: "#0f5939",
          900: "#0d4930",
          950: "#062a1c",
        },
      },
      boxShadow: {
        glow: "0 0 0 3px rgba(66,203,138,0.35)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn .8s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
