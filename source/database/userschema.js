const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name:{
        type: String,
    },
    email: {
        type: String,
    },
    role:{
        type: String,
    }
})

const usermodel = new mongoose.model("usermodel", userschema);
module.exports = usermodel;