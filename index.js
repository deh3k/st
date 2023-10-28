import express, { Router } from 'express'
import { router } from './src/routes/userRotes.js'

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        app.listen(PORT, () => { 
            console.log(`Server has started on PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()