/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
        fontSize: {
          'custom-title': '3.2em', // Tamanho da fonte personalizado
        },
        lineHeight: {
          'custom-title': '1.1', // Altura da linha personalizada
        },
    },
  },
  plugins: [],
}