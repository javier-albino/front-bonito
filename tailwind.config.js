/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#2f2f2f', // Añade un color personalizado basado en la imagen proporcionada
      },
    },
  },
  darkMode: 'media', // o 'class' si prefieres controlar el modo manualmente
  plugins: [],
}
