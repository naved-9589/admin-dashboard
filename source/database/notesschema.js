const mongoose = require("mongoose")

const noteschema = new mongoose.Schema({
    note:{
        type: String,
    },
    color: {
        type: String,
    },
})

const notemodel = new mongoose.model("notemodel", noteschema);
module.exports = notemodel;