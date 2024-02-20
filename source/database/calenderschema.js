const mongoose = require("mongoose")


const calenderschema = new mongoose.Schema({
     start: String,
     end: String,
     title: String
})

const calendermodel = new mongoose.model("calenderschema", calenderschema)
module.exports = calendermodel;