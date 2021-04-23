const express = require('express')
const app = express()
const port = 8080
const axios = require('axios')
// const cors = require('cors')
require('dotenv').config()

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// config
app.use(express.json({limit: "5000kb"}))
app.use(express.static('public'))
// app.set('view engine', 'ejs')
// app.set('views', './views') 

// // cors config
// app.use(cors())

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }


app.get('/test', (req, res) => {
    res.json({})

})


// client request with post req to API - req will have the body
app.post('/api/image-search', (req, res) => {
    
    axios.post('https://api.plant.id/v2/identify', getOptionsAxiosRequest(req.body.images)).then(apiRes => {
        console.log('Success:', apiRes.data);
        res.json(apiRes.data)
    }).catch(error => {
        console.error('Error: ', error)
    })
    
})

// request function - settings of the request your making
function getOptionsAxiosRequest(base64files) {
    // const files = ['photo1.jpg']; 
    // recieved fromt the promise instance of base64
    const data = {
        api_key: process.env.PLANT_API_KEY,
        images: base64files,
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        plant_details: ["common_names",
            "url",
            "name_authority",
            "wiki_description",
            "taxonomy",
            "synonyms"]
    };
    return data

}