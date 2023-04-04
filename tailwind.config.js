/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#16213e',
        'cabshare-red': '#932B77',
        'secondary-pink': '#9b59b6',
        'secondary-blue': '#4E1184',
      },
    },
  },
  plugins: [require('daisyui')],
};
