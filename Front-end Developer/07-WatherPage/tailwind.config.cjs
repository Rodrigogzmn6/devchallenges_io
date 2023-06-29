/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-1": "#082032",
        "background-2": "#2C394B",
        "background-3": "#100E1D",
        "text-1": "#EEEEEE",
        "text-2": "#7F8487",
        "accent-1": "#FF4C29",
        "accent-2": "#F6C90E",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
