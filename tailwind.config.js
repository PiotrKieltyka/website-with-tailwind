module.exports = {
  purge: {
    enabled: process.env.TAILWIND_MODE === 'build',
    content: ['./src/**/*.{html,scss,ts}'],
  },
  // content: ['./src/**/*.{html,ts}'],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require('tailwindcss-textshadow')],
};
