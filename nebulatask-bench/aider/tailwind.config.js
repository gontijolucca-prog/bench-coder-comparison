/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nebula: {
          950: '#070512',
          900: '#0b0820',
          800: '#120e2e',
          700: '#1c1547',
          600: '#2b1f6b',
          500: '#4c2fb8',
        },
        cosmos: {
          violet: '#8b5cf6',
          fuchsia: '#d946ef',
          pink: '#ec4899',
          cyan: '#22d3ee',
          mint: '#a3e635',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'nebula-gradient': 'radial-gradient(ellipse at top, rgba(139,92,246,0.35), transparent 60%), radial-gradient(ellipse at bottom right, rgba(236,72,153,0.25), transparent 60%), radial-gradient(ellipse at bottom left, rgba(34,211,238,0.18), transparent 60%)',
        'aurora': 'linear-gradient(120deg, #8b5cf6 0%, #d946ef 45%, #ec4899 100%)',
      },
      boxShadow: {
        'glow-violet': '0 0 60px -10px rgba(139, 92, 246, 0.6)',
        'glow-pink': '0 0 40px -10px rgba(236, 72, 153, 0.5)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
