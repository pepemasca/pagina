/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // Conservamos tu configuración actual para fuentes
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },

      // Extensión para agregar un borde de 3px
      borderWidth: {
        '3.2': '3.2px', // Borde de 3.5px
        '3': '3px', // Borde de 3px
        '2.8': '2.8px', // Borde de 2.5px
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"), // Conservamos tu plugin de tipografía



    // Añadimos las clases personalizadas
    function ({ addComponents }) {
      addComponents({
        // Clase normal para celdas
        ".c-normal": {
          "@apply border rounded border-gray-500 px-1 sm:px-3 py-2 text-center align-middle text-[9px] sm:text-base": {},
        },

        ".c-normal-left": {
          "@apply border rounded border-gray-500 px-2 sm:px-4 py-2 align-middle text-[8px] sm:text-base": {},
        },

        // Clase para celdas de tokens en la versión nueva
        ".c-new": {
          "@apply border-2.8 rounded border-pink-400 px-2 sm:px-4 py-2 text-center align-middle text-[9px] sm:text-base": {},
        },

        // Clase para titulos de columnas
        ".c-titles": {
          "@apply border-3.2 rounded-sm border-double border-slate-700 px-2 sm:px-4 py-2 text-center align-middle font-bold text-[9px] sm:text-base": {},
        },

        // Clase para fechas
        ".c-underline": {
          "@apply underline decoration-inherit underline-offset-4": {},
        },

        // Clase para operaciones de compra (con texto "COMPRA")
        ".op-compra": {
          "@apply text-green-500 font-semibold border-2.8 border-green-500 border-double rounded-lg": {},
          "&::before": {
            content: '"COMPRA"', // Agrega automáticamente el texto "COMPRA"
          },
        },

        // Clase para operaciones de venta (con texto "VENTA")
        ".op-venta": {
          "@apply text-red-500 font-semibold border-2.8 border-red-500 border-double rounded-lg": {},
          "&::before": {
            content: '"VENTA"', // Agrega automáticamente el texto "VENTA"
          },
        },

        // Clases de colores personalizados
        ".c-green": {
          "@apply bg-lime-200": {},
        },
        ".c-blue": {
          "@apply bg-cyan-100": {},
        },
        ".c-violet": {
          "@apply bg-purple-200": {},
        },
        ".c-orange": {
          "@apply bg-orange-200": {},
        },
        ".c-yellow": {
          "@apply bg-yellow-300": {},
        },
      });
    },
  ],
};
