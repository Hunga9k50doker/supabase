/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#2b825b",
      secondary: 'blue',
      blackColor: "#11181c",
      textColor: "#687076",
      lightGreenColor: "#3fcf8e",
      colorScale3Color: "#f1f3f5",
      bgGrayColor: "#889096",
      bgBlackColor: "#2e2e2e",
      bgDarkThumbColor: "#232323",
      scale: {
        100:'#fbfdfc',
        400: '#eceef0',
        500:'#e5e7eb', 
        600: '#f1f3f5',
        700: '#e5e7eb',
        800:'#c1c8cd',
        1000: '#7e868c',
        1100:'#687076',
        1200: '#11181c'
      },
      brand: {
        600: '#ccc'
      },
      base: '#687076',
    },
      extend: {
        fonsize: {
         'fs-12':'12px',
       }
      },
  },
  plugins: [],
}
