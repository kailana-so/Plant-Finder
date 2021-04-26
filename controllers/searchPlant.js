const express = require('express')
const axios = require('axios')
const router = express.Router()

const knex = require('knex')({
    client: 'pg',
    connection: {
    database: 'plant_finder_db'
    }
})

router.get('/api/plants', (req, res) => { 
    // console.log('/api/plants test')
    // console.log(req.query.input)
    // res.json({ message: req.query.input })


    knex.raw('SELECT * FROM plants where plant_name = ?;', [req.query.input]).then(dbRes => {
        res.json(dbRes.rows[0])
        console.log(dbRes.rows[0])
    }).catch(err => {
        res.json({ message: err.message })
    })
    

})
module.exports = router
