const mongoose = require("mongoose")



const contactschema = new mongoose.Schema({
    fname:{
        type: String,
    },
    lname:{
        type: String,
    },
    phone:{
        type: String,
    },
    email:{
        type: String,
    },
    company:{
        type: String,
    },
    dipartment:{
        type: String,
    },
    address:{
        type: String,
    },
    notes:{
        type: String,
    },
    rate:{
        type: String,
        default: false,
    },
  
})

const contactmodel = new mongoose.model("contactschema", contactschema)
module.exports = contactmodel;