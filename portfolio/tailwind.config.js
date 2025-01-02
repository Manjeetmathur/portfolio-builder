/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0.5 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0.5, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

