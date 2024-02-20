const mongoose = require("mongoose")

const productschema = new mongoose.Schema({
    name:{
        type: String,
    },
    price: {
        type: String,
    },
    catogary:{
        type: String,
    },
    image:{
        type: String,
    }
})

const productmodel = new mongoose.model("productmodel", productschema);
module.exports = productmodel;