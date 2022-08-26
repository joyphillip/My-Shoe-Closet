//Dependencies
const express = require('express')
const shoes = require('./models/shoes')
const app = express()
const PORT = 3000

//Default
app.get('/', (req, res) => {
    res.send('App is up and running!')
})

//Index - GET
app.get('/mycloset', (req, res) => {
    res.render('index.ejs', {
        allShoes: shoes
    })
})

//Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🎧 `)
})