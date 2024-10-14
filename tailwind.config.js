/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'lato' : ['lato', 'sans-serif']
      },
      backgroundImage: {
        'noise': "url('/src/assets/noise.svg')",
      }
    },
  },
  plugins: [],
}

