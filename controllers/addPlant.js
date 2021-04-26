const express = require('express')
const axios = require('axios')
const router = express.Router()

const knex = require('knex')({
    client: 'pg',
    connection: {
    database: 'plant_finder_db'
    }
})

router.post('/api/plants', (req, res) => { 
    console.log('routes matched')
    // console.log(req.body)
    // console.log(req.body.props.result)

    let data = req.body.props.result

    console.log(data.plant_name)
    console.log('new')
    /// i think this is where I need to insert it into the db
    knex.raw('INSERT INTO plants (plant_name) VALUES($1);', [data.plant_name]).then(knexRes => {
        
        res.json({ message: 'success' })
    
    }).catch(err => {
        res.json({ message: err.message })
    })

    // console.log('Success:', apiRes.data.suggestions);
})
module.exports = router
