const express = require('express')
const router = express.Router()
const knex = require('../libs/db.js')

router.get('/plants', (req, res) => { 

    knex.raw('SELECT * FROM plants;').then(dbRes => {
        res.json(dbRes.rows)
        console.log(dbRes.rows)
    }).catch(err => {
        res.json({ message: err.message })
    })
    
    

})
module.exports = router
