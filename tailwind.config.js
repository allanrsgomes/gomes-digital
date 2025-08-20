/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // A COR PRIMÁRIA NOVA É MANTIDA:
        'primary': '#3d72c3',        // Azul vibrante
        'primary-dark': '#3261a8',  // Azul vibrante (tom mais escuro para hover)

        // OS FUNDOS VOLTAM PARA O CINZA ESCURO ORIGINAL:
        'background': '#111827',     // Cinza escuro original (era gray-900)
        'surface': '#1f2937',      // Cinza um pouco mais claro (era gray-800)
        'card': '#374151',           // Cinza dos cards (era gray-700)

        // AS CORES DE TEXTO SÃO MANTIDAS PARA BOM CONTRASTE:
        'text': '#ffffff',           // Branco
        'text-muted': '#9ca3af',    // Cinza claro (era gray-400)
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}