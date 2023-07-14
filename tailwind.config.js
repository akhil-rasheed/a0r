/** @type {import('tailwindcss').Config} */
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
  },
  plugins: [],
};
