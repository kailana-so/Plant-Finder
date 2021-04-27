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
    console.log('routes matched /api/plants')
    // console.log(req.body)
    console.log(req.body.location)
    console.log(req.body.location.lat)

    let data = req.body.props.result
    let geo = req.body.location
   
    // console.log('new')
    /// i think this is where I need to insert it into the db
    knex('plants')
    .insert({
        plant_name: data.plant_name,
        common_name: data.plant_details.common_names,
        description: data.plant_details.wiki_description.value,
        class: data.plant_details.taxonomy.class,
        genus: data.plant_details.taxonomy.genus,
        species: data.plant_details.structured_name.species,
        image_url: data.similar_images[0].url,
        lat: geo.lat,
        lng: geo.lng
    }).then(knexRes => {
        res.json({ message: 'success' })
    }).catch(err => {
        res.json({ message: err.message })
    })

    // console.log('Success:', apiRes.data.suggestions);
})
module.exports = router
