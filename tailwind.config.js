const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#2EC4B6',
          secondary: '#FFBF69',
          accent: '#FF9F1C',
          neutral: colors.gray[500],
          'base-100': '#FFFFFF',
          info: '#63A9DE',
          success: '#1FA898',
          warning: '#BC9106',
          error: '#F20D2B'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
