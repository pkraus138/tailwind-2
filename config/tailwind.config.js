// [Default Theme](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js)
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0px 0px 8px rgba(113, 113, 113, 0.16);',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Work Sans', ...defaultTheme.fontFamily.serif]
      },
      minHeight: ({ theme }) => ({
        ...theme('spacing')
      }),
      minWidth: ({ theme }) => ({
        ...theme('spacing')
      }),
      maxHeight: ({ theme }) => ({
        ...theme('spacing')
      }),
      maxWidth: ({ theme }) => ({
        ...theme('spacing')
      }),
    },
    fontSize: {
      xs: ['0.65rem', { lineHeight: '1rem' }],
      sm: ['0.75rem', { lineHeight: '1rem' }],
      base: ['0.875rem', { lineHeight: '1.25rem' }], // Base is 14px 🤷🏻‍♂️
      lg: ['1rem', { lineHeight: '1.5rem' }],
      xl: ['1.125rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '3xl': ['1.5rem', { lineHeight: '2rem' }],
      '4xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '5xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '6xl': ['3rem', { lineHeight: '1' }],
      '7xl': ['3.75rem', { lineHeight: '1' }],
      '8xl': ['4.5rem', { lineHeight: '1' }],
      '9xl': ['6rem', { lineHeight: '1' }],
      '10xl': ['8rem', { lineHeight: '1' }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#151515',
      white: '#fff',
      body: '#E5E5E5',
      gray: {
        100: '#F8F8F8',
        200: '#F2F2F2',
        300: '#DFDFDF',
        400: '#BFBFBF',
        500: '#7E7E7E',
        600: '#5E5E5E',
        700: '#3F3F3F',
        disabled: '#BFBFBF'
      },
      grey: {
        100: '#F8F8F8',
        200: '#F2F2F2',
        300: '#DFDFDF',
        400: '#BFBFBF',
        500: '#7E7E7E',
        600: '#5E5E5E',
        700: '#3F3F3F',
        disabled: '#BFBFBF'
      },
      'kp-orange': {
        100: '#FFF4F2',
        200: '#FFEAE5',
        300: '#FFCBBF',
        400: '#FF9780',
        500: '#FF2E00',
        600: '#BF2200',
        700: '#BF2200'
      },
      'board-blue': {
        100: '#F3F3F5',
        200: '#E6E7EA',
        300: '#C2C3CC',
        400: '#86879A',
        500: '#0C0F35',
        600: '#292C50'
      },
      'power-blue': {
        100: '#F4F5FF',
        200: '#E8EAFF',
        300: '#C7CCFF',
        400: '#8F9AFF',
        500: '#1E34FF',
        600: '#1627BF',
        700: '#0F1A7F'
      },
      'inky-blue': {
        100: '#F2FCFE',
        200: '#E5F9FE',
        300: '#BFF0FC',
        400: '#80E2FA',
        500: '#00C5F5',
        600: '#0094B8',
        700: '#00627A'
      },
      green: {
        100: '#F6FEF5',
        200: '#ECFEEC',
        300: '#D1FCD0',
        400: '#A3F9A2',
        500: '#46F244',
        600: '#34B533',
        700: '#237922'
      },
      orange: {
        100: '#FFF8F2',
        200: '#FFF2E5',
        300: '#FFDEBF',
        400: '#FFBE80',
        500: '#FF7C00',
        600: '#BF5D00',
        700: '#7F3E00'
      },
      'red': {
        100: '#FEF2F8',
        200: '#FDE6F0',
        300: '#F9C1DA',
        400: '#F483B6',
        500: '#E8066D',
        600: '#AE0452',
        700: '#740336'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
