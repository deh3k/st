import db from '../../db.js'

class UserController {
    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM person`)
        console.log(users)
        res.json(users.rows)
    }

    async getUser(req, res) {
        const rfId = req.params.rfId
        const user = await db.query(`SELECT * FROM person where rfId = '${rfId}'`)

        if(user.rows[0]) { 
            res.json(user.rows[0])
        } else {
            res.json(0)
        }
    }
    async createUser(req, res) {
        const {rfId} = req.body 
        const newPerson = await db.query(`INSERT INTO person (rfId, points, adm) values (${rfId}, 0, 0) RETURNING *`)

        res.json(newPerson)
    }
    async deleteUser(req, res) {
        const rfId = req.params.rfId
        console.log(rfId)

        const person = await db.query(`DELETE FROM person where rfid = '${rfId}'`)
        res.json(person)
    }
}

export default new UserController()
