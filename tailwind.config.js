/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Comfortaa'],
        googleSans: ['Noto Sans'], 
        poiret: ['Poiret One'],
      },
    },
  },
  plugins: [],
}