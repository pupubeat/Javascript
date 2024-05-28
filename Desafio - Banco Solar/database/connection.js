import 'dotenv/config' // .env
import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
    allowExitOnIdle: true,

})