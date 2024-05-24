import 'dotenv/config' // .env
import pg from 'pg'
const { Pool } = pg

export const pool = new Pool({
    allowExitOnIdle: true,
    connectionString: process.env.DATABASE_URL // Conectar a la db vía url.
})

// probar con try - catch la conexión a la db.
try {
    const time = await pool.query('SELECT NOW()')
    console.log('Database conectada' + time.rows[0].now)
} catch (error) {
    console.log(error)
}