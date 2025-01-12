/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        'hide-scrollbar': {
          'overflow': 'hidden',
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
      },
    },
  },
  plugins: [],
}

