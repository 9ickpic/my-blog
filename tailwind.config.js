/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D7D7D7',
        secondary: '#8F93A2',
        background: '#0A0A0A',
        'code-bg': '#212121',
      },
      fontFamily: {
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        atkinson: ['var(--font-atkinson-hyperlegible)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
