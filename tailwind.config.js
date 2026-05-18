/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // Scans your index.html and data.js
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Condensed"', 'sans-serif'],
      },
      colors: {
        zinc: {
          50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8',
          400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46',
          800: '#27272a', 900: '#18181b'
        }
      }
    }
  },
  plugins: [],
}
