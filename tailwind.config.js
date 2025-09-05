/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3d72c3',
        'primary-dark': '#3261a8',
        'background': '#111827',
        'surface': '#1f2937',
        'card': '#374151',
        'text': '#ffffff',
        'text-muted': '#9ca3af',
        'logo': '#5352ED',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}