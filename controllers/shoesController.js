//Dependencies
const express = require('express')
const router = express.Router()
const Shoes = require('../models/shoes')

//Index - GET
router.get('/', (req, res) => {
    Shoes.find({}, (error, allShoes) => {
        res.render('index.ejs', {
            shoes: allShoes
    }) 
  })
})

//Seed - GET
router.get('/seed', (req, res) => {
    Shoes.create([
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
        })    
})

//New - GET
router.get('/new', (req, res) =>{
    res.render('new.ejs')
})

//Create - POST
router.post('/', (req, res) => {
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
router.get('/:id', (req, res) => {
    Shoes.findById(req.params.id, (error, foundShoe) => {
        res.render('show.ejs', {
            shoes: foundShoe
        })
    })
})

//Destroy - DELETE
router.delete('/:id', (req, res) => {
    Shoes.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/mycloset')
    })
})

//Edit - GET
router.get('/:id/edit', (req, res) => {
    Shoes.findById(req.params.id, (error, foundShoe) => {
        res.render( 'edit.ejs', {
            shoes: foundShoe
        })
    })
})


//Update - PUT
router.put('/:id', (req, res) => {
    if(req.body.comfortable === 'on') {
        req.body.comfortable = true
    } else {
        req.body.comfortable = false
    }
    Shoes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedModel) => {
        res.redirect('/mycloset')
    })
})



module.exports = router;
