const express = require('express')
const app = express()
const port = 8080
const axios = require('axios')
// env config
require('dotenv').config()

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// config
app.use(express.json({limit: "5000kb"}))
app.use(express.static('public'))
// app.set('view engine', 'ejs')
// app.set('views', './views') 


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

    // recieved from the promise instance of base64
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