module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '10rem',
        lg: '15rem',
        xl: '15rem',
      },
    },
  },
  daisyui: {
    themes: ['cupcake', 'dark'],
  },
  plugins: [require('daisyui')],
}
