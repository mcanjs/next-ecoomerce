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
        sans: ['var(--font-roboto)', 'var(--font-poppins)', ...fontFamily.sans]
      },
      colors: {
        primary: '#fd3d57'
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px'
      }
    },
    container: {
      center: true
    }
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: ['corporate']
  }
};
