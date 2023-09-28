/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        
        primary : '#ED1B24',
        secondary : '#EDCAC9'
        
      }},
      
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
