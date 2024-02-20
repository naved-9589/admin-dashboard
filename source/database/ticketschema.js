const mongoose = require("mongoose")

const ticketschema = new mongoose.Schema({
    ticket:{
        type: String,
    },
    status: {
        type: String,
    },
    assign:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const ticketmodel = new mongoose.model("ticketmodel", ticketschema);
module.exports = ticketmodel;