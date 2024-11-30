/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}', 
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin'),
    require('preline/plugin'),
  ],
}