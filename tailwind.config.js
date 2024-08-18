/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  relative: true,
  darkMode: 'selector',
  theme: {},
  plugins: [require('@tailwindcss/forms')],
};
