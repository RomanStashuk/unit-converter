/** @type {import('tailwindcss').Config} */

const flowbite = require('flowbite-react/tailwind');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    flowbite.content(),
  ],
  relative: true,
  darkMode: 'selector',
  theme: {},
  plugins: [require('@tailwindcss/forms'), flowbite.plugin()],
};
