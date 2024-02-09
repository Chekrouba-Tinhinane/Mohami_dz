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
        tablet: "640px",
        // => @media (min-width: 690px) { ... }
        phone: "320px",
        // => @media (min-width: 690px) { ... }
      },
    },
  },
  plugins: [],
};
