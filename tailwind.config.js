/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fiona: ["Fiona", "sans-serif"],
      raleway: ['Raleway', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    fontSize: {
      'h1': '44px',
      'h2': '26px',
      'h3': '22px',
      'h4': '18px',
      'h5': '16px',
      'p1': '50px',
      'p2': '28px',
      'p3': '16px',
      'p4': '14px',
      'p5': '12px',
    },
    colors: {
      bege: {
        100: '#F9F7F4',
        200: '#EAE6E3'
      },
      rosa: {
        100: '#8C5554',
        200: '#BC8383',
        300: '#E0BABA',
        400: '#F0DDDD'
      },
      preto: {
        100: '#2D2F30'
      },
      verde: {
        100: '7A8C6F'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
}
