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
      primary: "#0ea5e9",
      white: '#fff',
      black:'#000',
      blackColor: "#11181c",
      textColor: "#687076",
      secondary: "#00acee",
      colorScale3Color: "#f1f3f5",
      bgGrayColor: "#889096",
      bgBlackColor: "#2e2e2e",
      bgDarkThumbColor: "#1C1C1C",
      scale: {
        
        50:'#f8f9fa',
        100: '#fbfdfc',
        150: '#ededed',
        200: '#f1f3f5',
        250: '#889096',
        300: '#f1f3f5',
        400: '#eceef0',
        500: '#e6e8eb', 
        550: '#2e2e2e',
        600: '#dfe3e6',
        650: '#75715e',
        700: '#e5e7eb',
        750:'#bbbbbb',
        800: '#c1c8cd',
        850:'#343434',
        900: '#d7dbdf',
        1000: '#7e868c',
        1100: '#687076',
        1150: '#707070',
        1200: '#11181c',
        1250: '#282828',
        1300: '#232323',
        1350:'#3e3e3e',
        1400: '#1c1c1c',
        primary: "blue",
        secondary: "#00acee",
      },
      yelow: {
        900:'#f5d90a'
      },
      brand: {
        700: '#8ed2af',
        600: '#00acee',
        800: '#34b27b',
        900:'#3fcf8e'
      },
      base: '#687076',
    },
    extend: {
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'lg': '18px',
        'base': '18px',
        'fs-12': '12px',
        'fs-14': '14px',
        'fs-30': '30px',
      },
      top: {
        '15%': '15%',
      },
      left: {
        '15': '15%',
      },
        lineHeight: {
          'xs': '1rem',
          '4xl': '1rem',
        }
      },
  },
  plugins: [],
}
