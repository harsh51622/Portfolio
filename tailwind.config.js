/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#030305', // Deep dark, almost black
        foreground: '#ffffff',
        primary: {
          DEFAULT: '#0ea5e9', // Deep sky blue
          dark: '#0284c7',
        },
        card: 'rgba(255, 255, 255, 0.03)', // Premium glassy card background
        cardForeground: '#ffffff',
        muted: 'rgba(255, 255, 255, 0.05)',
        mutedForeground: '#a1a1aa',
        border: 'rgba(255, 255, 255, 0.08)', // Subtle border for glass
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        blob: 'blob 7s infinite',
        'scroll-left': 'scroll-left 30s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
