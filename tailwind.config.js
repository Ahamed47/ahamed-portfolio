/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "370px",
      },
    },
  },
  plugins: [],
};
