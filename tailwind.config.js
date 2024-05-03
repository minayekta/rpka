/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainBackbg": '#0D1117', 
        "columnBg": '#161C22'
      }
    },
  },
  plugins: [],
}

