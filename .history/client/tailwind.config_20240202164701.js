/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBrown: "#FAF5EE",
        primary: "#D4AD6B",
        lightTypo: "#563D2B",
      },
      screens: {
        tablet: "690px",
        // => @media (min-width: 690px) { ... }
        tablet: "690px",
        // => @media (min-width: 690px) { ... }
      },
    },
  },
  plugins: [],
};
