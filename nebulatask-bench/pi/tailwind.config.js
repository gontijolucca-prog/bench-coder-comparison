/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07060D',
          900: '#0C0B16',
          800: '#13111F',
          700: '#1C1929',
          600: '#2A2638',
        },
        bone: {
          50: '#F8F4EA',
          100: '#F0EAD9',
          200: '#D8D0BD',
        },
        amber: {
          glow: '#FF6B2C',
          soft: '#FFB627',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Geist"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      animation: {
        'drift-slow': 'drift 28s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(-3%,2%,0) scale(1.05)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};