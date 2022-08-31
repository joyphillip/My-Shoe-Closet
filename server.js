//Dependencies
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const session = require('express-session')


//.env
require('dotenv').config()
const PORT = process.env.PORT

//Session
const SESSION_SECRET = process.env.SESSION_SECRET
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

//Mongoose
const mongoose = require('mongoose');
const mongodbURI = process.env.MONGODB_URI
mongoose.connect(mongodbURI)
.then(()=> {
    console.log("Database connected")
}).catch(err=>{
    console.log('Database not connected'+err)
})
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
})


//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

const shoesController = require('./controllers/shoesController.js') 
app.use('/mycloset', shoesController)

const userController = require('./controllers/userController.js')
app.use('/users', userController)

//Default/Home
app.get("/", (req, res) => {
    res.render('./users/signin.ejs')
})


//Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🎧 `)
})