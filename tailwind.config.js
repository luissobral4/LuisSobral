/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        outlineColor: "#eeeaea",
        darkBgColor: "#1A1A1B"
      },
    },
  },
  plugins: [
  ],
}
