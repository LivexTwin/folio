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
    },
  },
  darkMode: "class",
  plugins: [],
};
