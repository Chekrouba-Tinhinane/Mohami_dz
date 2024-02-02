/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ...screens
      tablet: "690px",
      // => @media (min-width: 690px) { ... }
    },
    extend: {
      colors: {
        lightBrown: "#FAF5EE",
        primary: "#D4AD6B",
        lightTypo: "#563D2B",
      },
    },
  },
  plugins: [],
};
