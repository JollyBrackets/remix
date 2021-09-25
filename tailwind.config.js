module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-violet-crayola": "#815ac0ff",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
