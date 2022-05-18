module.exports = {
  purge: {
    content: ['./{components,pages,styles}/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: [
        'bg-coffees',
        'bg-bakeries',
        'bg-farms',
        'bg-bars',
        'bg-resturants',
      ],
    },
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      boxShadow: {
        sm: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        DEFAULT: '0px 4px 35px rgba(0, 0, 0, 0.08)',
        none: 'none',
      },
      colors: {
        'mulled-wine': {
          50: '#f6f6f7',
          100: '#ececef',
          200: '#d0d0d7',
          300: '#b4b3be',
          400: '#7b7b8e',
          500: '#43425d',
          600: '#3c3b54',
          700: '#323246',
          800: '#282838',
          900: '#21202e',
        },
        'pd-blue': {
          25: '#F2EEFF',
          50: '#e8dfff',
          100: '#bfdeff',
          200: '#83bfff',
          300: '#76aaff',
          400: '#DCEDFF',
          500: '#0171EA',
          600: '#271867',
          700: '#180e3e',
        },
        'pd-teal': {
          100: '#ecf9f9',
          200: '#c6ecec',
          300: '#9fdfdf',
          400: '#79d2d2',
          500: '#53c6c6',
          600: '#39acac',
          700: '#2d8686',
        },
        'pd-gray': {
          400: '#8d9091',
          300: '#cccccc',
          200: '#ededed',
          100: '#f6f6f6',
        },
        'pd-yellow': {
          100: '#fffbe5',
          200: '#fff3b3',
          300: '#ffeb80',
          400: '#ffe34d',
          500: '#ffd803',
          600: '#e6c200',
          700: '#b39700',
        },
        danger: {
          100: '#ffe9e9',
          150: '#ffd8d8',
          200: '#ffc0c0',
          500: '#ff3a3a',
          600: '#e83232',
        },
        success: {
          100: '#cef6df',
          500: '#0bd160',
          600: '#1caa59',
        },
        warning: {
          100: '#ffebd4',
          500: '#ff9928',
          600: '#e78a23',
        },
        info: {
          100: '#d2ecff',
          500: '#20a2ff',
          600: '#1C92E6',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
