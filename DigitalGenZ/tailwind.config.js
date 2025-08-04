/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Scan all JS/TS files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        primary: '#1f2937', // dark base
        accent: '#38bdf8',  // sky blue
        secondary: '#f3f4f6',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.svg')",
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideIn: 'slideIn 0.5s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
