/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD1DC", // Soft Pink
        secondary: "#C8E6C9", // Matcha Green
        accent: "#FF6B6B", // Cherry Red
        cream: "#FDFBF7", // Background Cream
        text: "#4A4A4A", // Dark Gray Text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Quicksand', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
