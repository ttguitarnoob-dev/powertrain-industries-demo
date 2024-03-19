/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  
  darkMode: "class",
  plugins: [nextui(
    {
    themes: {
      light: {
        colors: {
          primary: {
            // can add variants here
            DEFAULT: "#ff7b00",
            foreground: "#ffffff"
          }
        }
      }
    }
  }
  )],
}

