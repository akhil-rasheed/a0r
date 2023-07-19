/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  extend: {
    animation: {
      marquee: "marquee 30s linear infinite",
      marquee2: "marquee2 30s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      marquee2: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "rhody-wide": ["var(--font-rhody)"],
      "space-mono": ["var(--font-space-mono)"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      'akhil': {
        light: "#c9e7db",
        dark: "#bfe7f6",
      },
      'webdev': {
        light: "#f0bbcd",
        dark: "#c490d0",
      },
      'music': {
        light: "#eb8291",
        dark: "#f05b91",
      },
      'language': {
        light: "#eb7777",
        dark: "#f69144",
      },
      'design': {
        light: "#ffc97f",
        dark: "#a1815f",
      },
    },
  },
  plugins: [],
};
