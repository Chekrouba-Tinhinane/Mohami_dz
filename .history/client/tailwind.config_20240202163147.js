/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {screens: {
      'tablet': '690px',
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      colors: {
        lightBrown: "#FAF5EE",
        primary: "#D4AD6B",
        lightTypo: "#563D2B"
      },
    },
    
  },
  plugins: [],
};
