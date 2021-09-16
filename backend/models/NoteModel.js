const mongoose = require("mongoose");

const NoteSchema ={
    title:String,
    content:String,
    cost:{
        type:String,
        enum:["$","$$$","$$"],
        default:"$$"
    }
}
const Note=mongoose.model("Note",NoteSchema);
module.exports=Note;