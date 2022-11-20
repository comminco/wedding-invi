/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        monument: ['Monument'],
        helvetica: ['Helvetica'],
        helveticaLight: ['HelveticaLight'],
      },
    },
  },

  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
}
