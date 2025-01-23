/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding:{
        '1/3': '33.33333%',
        '2/3': '66.66667%',
      },
    },
  },
  plugins: [],
}

