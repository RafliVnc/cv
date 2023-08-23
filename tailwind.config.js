/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px'
    },
    extend: {
      colors: {
        primary: '#F6FDFF',
        secondary: '#78B0C1',
        Dark: '#2E515B',
        Tertiary: '#242424',
        Projek: '#EBF2F5'
      },
      screens:{
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

