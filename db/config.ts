import { defineDb, defineTable, column } from 'astro:db';

const Colors = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    color: column.text(),
    text: column.text(),
    details: column.text({ optional: true }),
  }
});

const Invest = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    mes: column.text(),
    entradas: column.text(),
    salidas: column.text(),
    invertido: column.text(),
  }
});

// Tabla Orders usando created_at para ordenamiento cronológico
const Orders = defineTable({
  columns: {
    // ID se auto-incrementa automáticamente
    id: column.number({ primaryKey: true }),
    // Campo de timestamp para ordenar cronológicamente (más reciente primero)
    created_at: column.date({ default: new Date() }),
    token: column.text(),
    amount: column.text(),
    pair: column.text(),
    operation: column.text(),
    price: column.text(),
    color: column.text(),
  }
});

// Tabla Operations usando created_at para ordenamiento cronológico
const Operations = defineTable({
  columns: {
    // ID se auto-incrementa automáticamente
    id: column.number({ primaryKey: true }),
    // Campo de timestamp para ordenar cronológicamente (más reciente primero)
    created_at: column.date({ default: new Date() }),
    date: column.text(),
    token: column.text(),
    amount: column.text(),
    pair: column.text(),
    operation: column.text(),
    price: column.text(),
    color: column.text(),
    details: column.text({ optional: true }),
  }
});

export default defineDb({
  tables: { Orders, Operations, Colors, Invest },
});