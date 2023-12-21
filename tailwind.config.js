/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        dm_sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        'primary-color': '#000',
        'secondary-color': '#FFF',
        'grey-color': '#DFDFDF',
      },
      screens: {
        'desktop-xxl': '1440px',
      },
    },
  },
  plugins: [],
};
