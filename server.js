const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
// const axios = require('axios')

// env config
require('dotenv').config()

// controllers
const indexRoutes = require('./controllers/indexController.js')
const imageSearchRoutes = require('./controllers/imageSearch.js')
const addPlantRoutes = require('./controllers/addPlant.js')
const queryPlantRoutes = require('./controllers/searchPlant.js')

// config
app.use(express.json({limit: "5000kb"}))
app.use(express.static('public'))
// app.set('view engine', 'ejs')
// app.set('views', './views') 


// ROUTES 
app.use(indexRoutes)
app.use(imageSearchRoutes)
app.use(addPlantRoutes)
app.use(queryPlantRoutes)


app.listen(port, () => {
console.log(`listening on port ${port}`)
})