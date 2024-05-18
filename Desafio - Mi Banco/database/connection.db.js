import 'dotenv/config'
import pg from 'pg'

const { Pool } = pg // usar instancias de pool para interactuar con la base de datos a utilizar

export const pool = new Pool({
    allowExitOnIdle: true, // cerrar automáticamente de la terminal
    connectionString: process.env.DATABASE_URL // conectar a base de datos postgresql via URL 
})

// try - catch para capturar errores en caso que tenga problemas en la conexión.
try {
    await pool.query("SELECT NOW()")
    console.log('DB conectada')
} catch (error) {
    console.log(error)
}