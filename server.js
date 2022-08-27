//Dependencies
const express = require('express')
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

//Seed - GET
app.get('/mycloset/seed', (req, res) => {
    Shoes.create = [
        {
            brand: 'Nike',
            name: 'Jordan 1s',
            img: 'https://i.postimg.cc/tJWyrD2H/Screen-Shot-2022-08-24-at-10-36-05-PM.png',
            color: 'Mocha',
            price: 130,
            category: 'Sneaker',
            comfortable: true,
        },{
            brand: 'Sam Edelman',
            name: 'Gigi',
            img: 'https://i.postimg.cc/tJSTfVS5/Screen-Shot-2022-08-26-at-3-00-03-PM.png',
            color: 'Black/Brown',
            price: 60,
            category: 'Sandal',
            comfortable: true,
        },{
            brand: 'Stuart Weitzman',
            name: 'Yuliana 60',
            img: 'https://i.postimg.cc/Hs1dYz5y/Screen-Shot-2022-08-26-at-3-05-19-PM.png',
            color: 'Black',
            price: 595,
            category: 'Boot',
            comfortable: false,     
            }
        ], (err, data) => {
            res.redirect('/mycloset')
        }    
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
    Shoes.findById(req.params.id, (error, foundShoe) => {
        res.render( 'edit.ejs', {
            shoes: foundShoe
        })
    })
})


//Update - PUT
app.put('/mycloset/:id', (req, res) => {
    if(req.body.comfortable === 'on') {
        req.body.comfortable = true
    } else {
        req.body.comfortable = false
    }
    Shoes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedModel) => {
        res.redirect('/mycloset')
    })
})

//Destory - DELETE
app.delete('/mycloset/:id', (req, res) => {
    Shoes.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/mycloset')
    })
})

//Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🎧 `)
})