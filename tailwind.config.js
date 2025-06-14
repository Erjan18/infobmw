/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bmw: {
          blue: '#1C69D4',
          'blue-dark': '#0F4C96',
          'blue-light': '#4A90E2',
          silver: '#C0C0C0',
          'silver-light': '#E8E8E8',
          'silver-dark': '#A0A0A0',
          black: '#000000',
          'gray-900': '#1A1A1A',
          'gray-800': '#2D2D2D',
          'gray-700': '#4A4A4A',
          'gray-100': '#F5F5F5',
        }
      },
      fontFamily: {
        'bmw': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
};