const mongoose = require("mongoose")


const userloginschema = new mongoose.Schema({
     username: String,
     password: String,
})

const userloginmodel = new mongoose.model("userloginschema", userloginschema)
module.exports = userloginmodel;