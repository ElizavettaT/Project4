var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/nlp', async function (req, res) {
    response = await getNlpData(req.get('article'))
    // console.log("Response: ", response)
    res.send(response)
})

async function getNlpData(article) {
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?url=${article}&key=${process.env.API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let jsonResponse = await response.json()
    let text = undefined
    if (jsonResponse.sentence_list && jsonResponse.sentence_list.length >= 0) {
        text = jsonResponse.sentence_list[0].text
    }
    return { 'polarity': jsonResponse.score_tag, 'subjectivity': jsonResponse.subjectivity, text }
}