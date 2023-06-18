/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-color' : "rgb(220 38 38)",
        'secondary-color' : "rgb(10 10 10)",
      },
      fontSize: {
        "big" : "15rem"
      },
      borderWidth : {
        "1" : "1px",
        "1/2" : "0.5px",
        "1/4" : "0.25px",
      },
      transitionDuration : {
        "1500" : "1500ms",
        "2000" : "2000ms",
        "2500" : "2500ms",
        "3000" : "3000ms",
      },
      transitionDelay : {
        "1100" : "1100ms",
        "1200" : "1200ms",
        "1300" : "1300ms",
        "1400" : "1400ms",
        "1500" : "1500ms",
        "2000" : "2000ms",
        "2500" : "2500ms",
        "3000" : "3000ms",
      }
    },
  },
  plugins: [],
}