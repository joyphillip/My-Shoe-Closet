//Dependencies
const express = require('express')
const app = express()
const PORT = 3000
const methodOverride = require('method-override')
const shoesController = require('./controllers/shoesController')

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
app.use('/mycloset', shoesController)


//Default
app.get('/', (req, res) => {
    res.send('App is up and running!')
})


//Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🎧 `)
})