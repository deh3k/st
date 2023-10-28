import express, { Router } from 'express'
import { router } from './src/routes/userRotes.js'
import pg from "pg"
import cors from "cors"

const Client = pg.Client



const PORT = process.env.PORT || 5000
const DATABASE_URL = "postgresql://phhh:pZU-e3IHMu8lWgwyp9ggsw@cheeky-tapir-11314.8nj.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"

const client = new Client(DATABASE_URL);
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

const start = async () => {
    await client.connect();
    try {
        const results = await client.query("SELECT NOW()");
        app.listen(PORT, () => { 
            console.log(`Server has started on PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    } finally {
        client.end();
    }
}

start()