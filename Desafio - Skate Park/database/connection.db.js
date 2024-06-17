import 'dotenv/config'
import pg from 'pg'

const { Pool } = pg // usar instancias de pool para interactuar con la base de datos a utilizar

export const pool = new Pool({
    allowExitOnIdle: true,
    connectionString: process.env.DATABASE_URL
})

// probar con try - catch la conexión a la db.
try {
    const time = await pool.query('SELECT NOW()')
    console.log('Database conectada / ' + time.rows[0].now)
} catch (error) {
    console.log(error)
}