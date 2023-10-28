import pg from 'pg';
const { Pool } = pg

const CONNECT = "postgresql://phhh:pZU-e3IHMu8lWgwyp9ggsw@cheeky-tapir-11314.8nj.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"

const pool = new Pool({
    connectionString: CONNECT,
    application_name: "docs_simplecrud_node-postgres"
})

const start = async () => {
    const client = await pool.connect();
}

export default pool