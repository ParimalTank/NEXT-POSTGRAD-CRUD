const pool = require("../queries")


const getAllActor = (request, response) => {
    pool.query('SELECT * FROM actor', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getAllActor
}