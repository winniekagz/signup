const express=require ("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json());

//connect.db
const DbACCESS="mongodb+srv://Admin:Admin@cluster0.lmz1w.mongodb.net/notesDB?retryWrites=true&w=majority"
mongoose.connect(DbACCESS,{useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>console.log("connected"))
.catch((err) =>console.log(err));

//require route
app.use("/",require('./routes/Noteroute'));

app.listen(4001,function(){
    console.log("running on port 4001")
})