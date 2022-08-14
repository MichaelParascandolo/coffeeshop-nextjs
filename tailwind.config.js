/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Pacifico"', "cursive"],
        nav: ['"DynaPuff"', "cursive"],
      },
    },
  },
  plugins: [],
};
