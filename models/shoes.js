//Require mongoose
const mongoose = require("mongoose")

//Create Schema
const shoesSchema = new mongoose.Schema({
    brand: String,
    name: String,
    img: String,
    color: String,
    price: {type: Number, min: 0},
    category: String,
    comfortable: Boolean,
})

//Make schema into model
const Shoes = mongoose.model('Shoes', shoesSchema)

//Export
module.exports = Shoes
