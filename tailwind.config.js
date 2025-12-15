// my-fashion-app/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        // Define your custom color palette based on the fashion director theme
        primary: '#3C3C3C',    // Dark Gray/Black for main text and borders
        secondary: '#F5F5F5',  // Off-White/Light Gray for backgrounds
        accent: '#A57F5D',     // Rich Tan/Sepia for buttons and highlights
        textMain: '#3C3C3C',
        textSub: '#6E6E6E',
        // Feedback colors
        success: '#10B981',
        error: '#EF4444',
      },
    },
  },
  plugins: [],
}