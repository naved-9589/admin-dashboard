const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/adminpanel").then(()=>{console.log("connected")}).catch(()=>{console.log("not connected")})

// mongodb://localhost:27017