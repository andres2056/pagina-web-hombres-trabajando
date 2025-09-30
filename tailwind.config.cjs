/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003366",     // Encabezados y navbar
        secondary: "#6699CC",   // Botones secundarios y bordes
        accent: "#FF6600",      // CTA: Solicitar Presupuesto, Contactar
        textmain: "#333333",    // Texto principal
        background: "#F5F5F5",  // Fondo de la página
      },
    },
  },
  plugins: [],
}
