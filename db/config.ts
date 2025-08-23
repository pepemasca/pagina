import { defineDb, defineTable, column } from 'astro:db';

// Definimos la tabla "personas" con sus columnas
const Personas = defineTable({
  columns: {
    // Columna id: número único que se incrementa automáticamente
    id: column.number({ primaryKey: true }),
    // Columna nombre: texto obligatorio
    nombre: column.text(),
    // Columna edad: número obligatorio
    edad: column.number(),
  }
});

// Exportamos la configuración de la base de datos
export default defineDb({
  tables: { Personas }
});