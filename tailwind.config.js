/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      caveat: ["var(--font-caveat)"],
    },
    extend: {
      colors: {
        primary: "#541fa6",
        background: "#111b27",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
