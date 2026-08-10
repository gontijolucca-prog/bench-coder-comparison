/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#F2EEE7',
        ink: '#0E0D0C',
        ash: '#8A857C',
        signal: '#FF4D2E',
        ember: '#E03A1F',
        rule: '#1E1B17',
        card: '#EBE5DA',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Geist', 'ui-sans-serif', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        crush: '-0.06em',
      },
      animation: {
        rise: 'rise 1.1s cubic-bezier(0.16, 1, 0.3, 1) both',
        fade: 'fade 0.9s ease-out both',
        ticker: 'ticker 38s linear infinite',
        'pulse-signal': 'pulse-signal 2.4s ease-in-out infinite',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-signal': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(0.85)' },
        },
      },
    },
  },
  plugins: [],
}