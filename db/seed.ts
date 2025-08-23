import { db, Personas } from 'astro:db';

// Esta función se ejecuta para llenar la tabla con datos iniciales
export default async function seed() {
  // Insertamos múltiples filas en la tabla Personas
  await db.insert(Personas).values([
    { 
      id: 1,
      nombre: 'María',
      edad: 20 
    },
    { 
      id: 2,
      nombre: 'Juan',
      edad: 18 
    }
  ]);
  
  console.log('✅ Base de datos poblada con éxito');
}