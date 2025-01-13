/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
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
      fontSize: {
        md: "1.1rem",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
