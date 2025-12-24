/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFE44D',
          light: '#FFF176',
          dark: '#D4AF37',
          darker: '#B8860B',
        },
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFE44D 0%, #FFD54F 50%, #D4AF37 100%)',
        'gold-gradient-vertical': 'linear-gradient(180deg, #FFF176 0%, #FFE44D 50%, #D4AF37 100%)',
        'gold-gradient-text': 'linear-gradient(135deg, #FFF176 0%, #FFE44D 30%, #D4AF37 100%)',
      },
    },
  },
  plugins: [],
}

