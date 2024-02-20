const mongoose = require("mongoose")

const lineschema = new mongoose.Schema({
    month:{
        type: String,
    },
    salesquantity: {
        type: Number,
    }
})

const linemodel = new mongoose.model("linemodel", lineschema);
module.exports = linemodel;