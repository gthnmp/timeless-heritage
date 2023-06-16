/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth : {
        "1" : "1px"
      },
      transitionDuration : {
        "1500" : "1500ms",
        "2000" : "2000ms",
        "2500" : "2500ms",
        "3000" : "3000ms",
      },
      transitionDelay : {
        "1500" : "1500ms",
        "2000" : "2000ms",
        "2500" : "2500ms",
        "3000" : "3000ms",
      }
    },
  },
  plugins: [],
}