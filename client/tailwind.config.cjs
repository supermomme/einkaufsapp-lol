/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'green-gray-1': 'rgb(231,240,231)',
        'green-gray-2': 'rgb(214,221,214)',
        'green-gray-3': 'rgb(204,208,204)',
      },
    },
  },
  plugins: [],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
