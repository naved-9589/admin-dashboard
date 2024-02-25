const express = require("express")
const app = express();
const cors = require('cors');
const path = require("path")


app.use(cors());
app.use(express.static(path.join(__dirname, 'uploads')));
require("./database/conn");

app.use(express.json());
app.use("/", require("./endpoints/endpoints"))

app.listen("1000",()=>{
   console.log("hello express")
})