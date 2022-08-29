//Dependencies
const bcrypt = require('bcrypt')
const express = require('express')
const User = require('../models/users.js')
const router = express.Router()


//Register
router.get('/register', (req, res) => {
    res.render('users/register.ejs')
})


// Create - POST
router.post('/register', (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt)
    console.log(req.body)
    User.findOne({username: req.body.username}, (err, userExists) => {
       if(userExists) {
        res.send('Username is taken. Please try again')
       } else {
        User.create(req.body, (err, createdUser) => {
            console.log(createdUser)
            // res.send('User created')
            res.redirect('/users/signin')
        })
       }
    })
})

// Sign-in
router.get('/signin', (req, res) => {
    res.render('users/signin.ejs')
})

//Create - POST
router.post('/signin', (req, res) => {
    //get user with that user name
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if(foundUser) {
            //if user exists, compare passwords
            const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
            if( validLogin) {
                req.session.currentUser = foundUser
                // res.redirect('/mycloset')
                res.send('User logged in')
            } else {
                res.send('Try again')
            }
        } else {
            //if user does not exist, send invalid message
            res.send('Invalid username or password')
        }
    })
})




module.exports = router