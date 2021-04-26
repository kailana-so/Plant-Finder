const express = require('express')
const axios = require('axios')
const router = express.Router()


// client request with post req to API - req will have the body
router.post('/api/image-search', (req, res) => {

    axios.post('https://api.plant.id/v2/identify', getOptionsAxiosRequest(req.body.images)).then(apiRes => {
        console.log('Success:', apiRes.data);
        res.json(apiRes.data)
        console.log(apiRes.data.suggestions) 
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
module.exports = router
