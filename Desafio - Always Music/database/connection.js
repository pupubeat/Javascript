import 'dotenv/config'
const { Pool } = pg

export const pool = new Pool({
    allowExitOnIdle: true
})

try {
    const time = await pool.query('SELECT NOW()')
    console.log('Database conectada' + time.rows[0].now)
} catch (error) {
    console.log(error)
}