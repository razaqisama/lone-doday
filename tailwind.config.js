module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        lg: '480px'
      },
      minHeight: {
        '10': '2.5rem'
      }
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus', 'group-hover'],
      translate: ['hover', 'group-hover'],
      scale: ['hover', 'group-hover']
    },
  },
  plugins: [],
}
