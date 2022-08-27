//Dependencies
const express = require('express')
const shoes = require('./models/shoes')
const app = express()
const PORT = 3000
const methodOverride = require('method-override')

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

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

//New - GET
app.get('/mycloset/new', (req, res) =>{
    res.render('new.ejs')
})

//Create - POST
app.post('/mycloset', (req, res) => {
    console.log(req.body)
    shoes.push(req.body)
    res.redirect('/mycloset')
})

//Show - GET
app.get('/mycloset/:id', (req, res) => {
    res.render('show.ejs', {
        shoes: shoes[req.params.id]
    })
})

//Edit - GET
app.get('/mycloset/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        shoes: shoes[req.params.id],
        id: req.params.id
    })
})

//Update - PUT
app.put('/mycloset/:id', (req, res) => {
    shoes[req.params.id] = req.body
    res.redirect('/mycloset')
})

//Destory - DELETE
app.delete('/mycloset/:id', (req, res) => {
    shoes.splice(req.params.id, 1)
    res.redirect('/mycloset')
})

//Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🎧 `)
})