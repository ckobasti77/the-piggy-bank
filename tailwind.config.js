// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   purge: ["./dist/*.html"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };

const plugin = require('tailwindcss/plugin')

const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')
const lineClamp = require('@tailwindcss/line-clamp')
const aspectRatio = require('@tailwindcss/aspect-ratio')

module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: "class",
  theme: {
      extend: {
          colors: {
              primary: '#1B73E8',
          },
      },
      fontSize: {
        "sm": '0.8rem',
        "base": '1rem',
        "xl": '1.25rem',
        "2xl": '1.563rem',
        "3xl": '1.953rem',
        "4xl": '2.441rem',
        "5xl": '3.052rem',
      }
  },
  plugins: [
    typography,
    forms,
    lineClamp,
    aspectRatio
  ]
};