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
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Conservamos tu plugin de tipografía

    // Añadimos las clases personalizadas
    function ({ addComponents }) {
      addComponents({
        // Clase normal para celdas
        ".c-normal": {
          "@apply border border-gray-500 px-1 sm:px-3 py-2 text-center align-middle text-[9px] sm:text-base": {},
        },

        ".c-normal-left": {
          "@apply border border-gray-500 px-2 sm:px-4 py-2 align-middle text-[9px] sm:text-base": {},
        },

        // Clase para celdas de tokens en la versión nueva
        ".c-new": {
          "@apply border-2 border-red-400 px-2 sm:px-4 py-2 text-center align-middle text-[9px] sm:text-base": {},
        },

        // Clase para titulos de columnas
        ".c-titles": {
          "@apply border border-gray-500 px-2 sm:px-4 py-2 text-center align-middle font-bold text-[9px] sm:text-base": {},
        },

        // Clase para operaciones de compra (con texto "COMPRA")
        ".op-compra": {
          "@apply text-green-500": {},
          "&::before": {
            content: '"COMPRA"', // Agrega automáticamente el texto "COMPRA"
          },
        },

        // Clase para operaciones de venta (con texto "VENTA")
        ".op-venta": {
          "@apply text-red-500": {},
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
