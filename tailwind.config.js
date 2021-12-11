module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      cursor: ['disabled'],
      opacity: ['disabled'],
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
