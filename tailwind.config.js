/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray700: '#0D0D0D',
        gray600: '#1A1A1A',
        gray500: '#262626',
        gray400: '#333333',
        gray300: '#808080',
        gray200: '#D9D9D9',

        gray100: '#F2F2F2',

        danger: '#E25858',

        'purple-light': '#8284FA',
        'purple-dark': '#5E60CE',

        'blue-light': '#4EA8DE',
        'blue-dark': '#1E6F9F',
      },
      fontFamily: {
        regular: 'Inter_400Regular',
        bold: 'Inter_700Bold',
      },
    },
  },
  plugins: [],
}
