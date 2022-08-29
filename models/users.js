//Dependencies
const mongoose = require('mongoose')

//Create Schema
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    passsword: {type: String, required: true}
})

//Make schema into model
const User = mongoose.model('User', userSchema)

//Export
module.exports = User
