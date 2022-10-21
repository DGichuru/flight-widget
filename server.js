const PORT = 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app  = express()

app.get('/flights', (req, res) => {
    const options = {
        url:"https://d9957349-94ab-4bcd-8b87-2d1b9aec90a7-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/flights/collections/departures",
        headers: {
            accept: 'application/json',
            'X-Cassandra-Token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsYmJUcDRObzdfUHBJLUxOWFZJbUFmY1pWQWs3TFNwdnY5Z0RFVF80M2ZrIn0.eyJqdGkiOiJhYmU5ZWYxZC0xNDcwLTRmNWMtYWM5MS1lMGFlM2JjYzA2NDUiLCJleHAiOjE2NjYyMTYwODUsIm5iZiI6MCwiaWF0IjoxNjY2MTgwMDg2LCJpc3MiOiJodHRwczovL2F1dGguY2xvdWQuZGF0YXN0YXguY29tL2F1dGgvcmVhbG1zL0Nsb3VkVXNlcnMiLCJhdWQiOiJhdXRoLXByb3h5Iiwic3ViIjoiZDFjYzNiNDktZjUzMy00OGUwLWIzNWEtNzAxMTEyYmU3YWNhIiwidHlwIjoiSUQiLCJhenAiOiJhdXRoLXByb3h5IiwiYXV0aF90aW1lIjoxNjY2MTgwMDg1LCJzZXNzaW9uX3N0YXRlIjoiZjYzOTAyOTQtNWZlZC00ODNkLWE0ZjctMjlkNzc5YjIzZTdmIiwiYWNyIjoiMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwibmFtZSI6IkRhbmllbCBHaWNodXJ1IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFuZ2ljaHVydTc3QGdtYWlsLmNvbSIsImdpdmVuX25hbWUiOiJEYW5pZWwiLCJmYW1pbHlfbmFtZSI6IkdpY2h1cnUiLCJlbWFpbCI6ImRhbmdpY2h1cnU3N0BnbWFpbC5jb20ifQ.UV3TyZpznNRfEH7RaxTpEt6OG7QYfK-yttwjqbB0j0XCt67_scv9_EJzTGPt9c_5FTekwA6HAXTT3w7tE97M1ET5bccU4R6eIqfcPaTPaQk6pNeXR0eG4faeeCg6MXmMPNS2bQ6c3MpGCKCZZGHrClvdzmYe-FdUWOoSD3hWkSKfSOtNmbkxl5yiNUtFZqzQb5rfIDIYGeLYy4lqr5U6gQN9DQlk9S8McHwZy2MLnk9BQLzviXvPRi5NjRJUQhGu6MpOoClmgo9gtGbohoO6sgkkdtcxdtc4lY4cEsmpjbF59Lckhxu6k6aRCGYFN9k_as2PyTtPxnnIhI7qOhEx7A'
        }
    }

    axios.request(options).then(response => {
        console.log(response.data)
        res.json(response.data)
    }).catch(error => {
        console.log(error)
    })

})

app.listen(PORT, () => console.log('running on port, ' + PORT))