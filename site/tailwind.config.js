/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sumi-ink': '#2C2C2C', // Keeping for text contrast
        'earth': '#C8B29C',     // Warm brown from ref
        'bone': '#F0EBE0',      // Light cream/off-white from ref
        'fog': '#D2D0C8',       // Greige from ref
        'smoke': '#9C9890',     // Darker grey-brown from ref
        'was-paper': '#F0EBE0', // Mapping main bg to 'bone'
        'wood': '#8B5E3C',      // Keeping existing accent
        'matcha': '#8A9A5B',    // Muted green for accents
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
