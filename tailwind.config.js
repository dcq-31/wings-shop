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
          primary: '#ef8354',
          secondary: '#637492',
          accent: '#2d3142',
          neutral: '#707575',
          info: '#63A9DE',
          success: '#24de4b',
          warning: '#ffd633',
          error: '#F20D2B'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
