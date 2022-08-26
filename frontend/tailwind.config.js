module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        placeholder: "url('/src/static/images/placeholder.png')",
      },
    },
    placeholderColor: {
      accent: '#D89313',
    },
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
    themes: ['cupcake', 'cupcake'],
  },
  plugins: [require('daisyui')],
}
