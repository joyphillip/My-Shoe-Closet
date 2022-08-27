const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/users')
const router = express.Router()


//Default
//Register
router.get('/register', (req, res) => {
    res.render('users/register.ejs')
})

//Create - POST
router.post('/register', (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt)
    // console.log(req.body)
    User.findOne({username: req.body.username}, (error, userExists) => {
       if(userExists) {
        res.send('Username is taken. Please try again')
       } else {
        User.create(req.body, (error, createdUser) => {
            // console.log(createdUser)
            // res.send('User created')
            res.redirect('/mycloset')
        })
       }
    })
})

// Sign-in
router.get('/signin', (req, res) => {
    res.render('users/signin.ejs')
})




module.exports = router