const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2em': '2em', // This defines a text size called '2em'
      },
      fontFamily: {
        custom: ['Montserrat', 'sans-serif'],
        custom2: ['Agbalumo', 'sans-serif'],
        custom3: ['Raleway', 'sans-serif'],
        

      },
     
    },
  },
  plugins: [],
}

