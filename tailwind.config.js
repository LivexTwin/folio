/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx, mdx}",
    "./components/**/*.{js,ts,jsx,tsx, mdx}",
    "./app/**/*.{js,ts,jsx,tsx, mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {

      //   sans: ["var(--font-myfont)", "sans-serif"], // Use the custom font
      // },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      maskImage: {
        gradient: "linear-gradient(0deg, transparent, #000 80px)",
      },
      colors: {},
      fontSize: {
        responsive: "clamp(1rem, 1.5vw, 1.1rem)",
      },
    },
  },
  // darkMode: "class",
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask-gradient": {
          "-webkit-mask-image": "linear-gradient(0deg, transparent, #000 80px)",
          "mask-image": "linear-gradient(0deg, transparent, #000 80px)",
        },
      });
    },
  ],
  darkMode: "selector",
};
