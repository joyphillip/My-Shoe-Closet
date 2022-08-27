//Dependencies
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const shoesController = require('./controllers/shoesController')

//.env
require('dotenv').config()
const PORT = process.env.PORT

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
app.use('/mycloset', shoesController)


//Default
app.get('/', (req, res) => {
    res.send('App is up and running!')
})


//Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🎧 `)
})