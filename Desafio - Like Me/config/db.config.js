import 'dotenv/config'
import pg from 'pg'
const { Pool } = pg

export const db = new Pool({
    allowExitOnIdle: true,
    connectionString: process.env.DATABASE_URL
})

// Try - Catch para comprobar si es posible conectarse a la base de datos, además de capturar errores.
try {
    await db.query('SELECT NOW()')
    console.log('Base de datos conectada.')

} catch (error) {
    console.log(error)
}


