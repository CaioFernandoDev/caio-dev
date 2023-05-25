/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    fontFamily: {
      caveat: ["var(--font-caveat)"],
    },
    extend: {
      colors: {
        primary: "#4c1d95",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
