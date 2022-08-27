//Dependencies
const express = require('express')
// const shoes = require('./models/seed.js')
const Shoes = require('./models/shoes.js')
const app = express()
const PORT = 3000
const methodOverride = require('method-override')

//Mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/basiccrud', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


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
    Shoes.find({}, (error, allShoes) => {
        res.render('index.ejs', {
            shoes: allShoes
    }) 
  })
})

//New - GET
app.get('/mycloset/new', (req, res) =>{
    res.render('new.ejs')
})

//Create - POST
app.post('/mycloset', (req, res) => {
    if(req.body.comfortable === 'on') {
        req.body.comfortable = true
    } else {
        req.body.comfortable = false
    }
    Shoes.create(req.body, (error, createdShoe) => {
        if(error){
            console.log('error', error)
            res.send(error)
        } else {
            res.redirect('/mycloset')
        }
    })
})

//Show - GET
app.get('/mycloset/:id', (req, res) => {
    Shoes.findById(req.params.id, (error, foundShoe) => {
        res.render('show.ejs', {
            shoes: foundShoe
        })
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