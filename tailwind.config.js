/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBrown: "#1E1916",
        lightBrown: "#8A691E",
        dustyBrown: "#605A44",
        darkGrey: "#3B3B3C",
        lightGrey: "#7C7C7C",
        dustyGrey: "#7C846F",
        cream: "#F8F1D2",
        black: "#040404",
        green: "#3C4431",
        brokenWhite: "#FCFBF4",
      },
      fontFamily: {
        'satisfy': ['Satisfy'],
        'poppins': ['Poppins']
      }
    },
  },
  plugins: [],
};
