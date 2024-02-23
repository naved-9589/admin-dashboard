const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ernavedshaikh7869:9589157798@cluster0.nefvd8f.mongodb.net/?retryWrites=true&w=majority").then(()=>{console.log("connected")}).catch(()=>{console.log("not connected")})



// mongodb://127.0.0.1:27017/adminpanel