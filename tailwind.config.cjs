const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{jsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
      },
      borderRadius: {
        sm: '4px',
      },
      screens: {
        sm: '0px',
        lg: '997px',
      },
      colors: {
        primary: {
          DEFAULT:
            'rgb(var(--docs-color-primary-200) / <alpha-value>)',
          100: 'rgb(var(--docs-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--docs-color-primary-200) / <alpha-value>)',
        },
        secondary: {
          DEFAULT:
            'rgb(var(--docs-color-secondary-1000) / <alpha-value>)',
          1000: 'rgb(var(--docs-color-secondary-1000) / <alpha-value>)',
          900: 'rgb(var(--docs-color-secondary-900) / <alpha-value>)',
          800: 'rgb(var(--docs-color-secondary-800) / <alpha-value>)',
          700: 'rgb(var(--docs-color-secondary-700) / <alpha-value>)',
        },
        text: {
          400: 'rgb(var(--docs-color-text-400) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
