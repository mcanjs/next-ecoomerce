/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)', ...fontFamily.sans]
      }
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1141px',
        '2xl': '1496px'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['corporate']
  }
};
