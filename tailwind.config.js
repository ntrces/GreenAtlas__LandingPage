/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // This line ensures Tailwind looks deep into your "Admin Portal", "Dashboard", etc. folders
    "./src/**/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#022c22',
        }
      }
    },
  },
  plugins: [],
}