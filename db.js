import pg from 'pg';
const { Pool } = pg

const pool = new Pool({
    user: "postgres",
    password: "admin",
    host: "https://sm-tr.onrender.com/",
    port: "5432",
    database: "node_postgres"
})


export default pool