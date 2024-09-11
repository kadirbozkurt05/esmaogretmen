/** @type {import('tailwindcss').Config} */





const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-like': "url('https://i.ibb.co/prMYsS5/logo-no-background.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        'back-ground':"url('https://i.ibb.co/N1HpNLM/bg.jpg')"
      },
      fontFamily: {
        trebuchet: ['"trebuchet"', "trebuchet ms"],
      },
      colors:{
        'light-rose': '#ffeaea',
      }
    },
  },
  plugins: [],
});