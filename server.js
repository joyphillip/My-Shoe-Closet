//Dependencies
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const session = require('express-session')



//.env
require('dotenv').config()
const PORT = process.env.PORT

//Sessions
const SESSION_SECRET = process.env.SESSION_SECRET
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

//Mongoose
const mongoose = require('mongoose');
const mongodbURI = process.env.MONGODB_URI
mongoose.connect(mongodbURI);
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

//Router
const shoesController = require('./controllers/shoesController') 
app.use('/mycloset', shoesController)

const userController = require('./controllers/userController')
app.use('/users', userController)

//Default
app.get('/', (req, res) => {
    res.send('App is up and running!')
})


//Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🎧 `)
})