/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navbar:"#D9D9D9",
        button: "#219EBC",
        sidebar:"#212121",
        box:"#E7E7E7",
        line: "#AEAEAE",
        white: "#ffffff"
      }
    },
  },
  plugins: [],
}

