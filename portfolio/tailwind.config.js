/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'sans-serif'],
        custom2: ['Agbalumo', 'sans-serif'],

      },
    },
  },
  plugins: [],
}

