const { default: axios } = require('axios')
const express = require('express')
const router = express.Router()
const knex = require('../libs/db.js')

router.get('/api/plants', (req, res) => { 
    // console.log('/api/plants test')
    // console.log(req.query.input)
    // res.json({ message: req.query.input })

    knex.raw('SELECT * FROM plants;').then(dbRes => {
        res.json(dbRes.rows)
        // console.log(dbRes.rows)
    }).catch(err => {
        res.json({ message: err.message })
    })
    

})
module.exports = router




