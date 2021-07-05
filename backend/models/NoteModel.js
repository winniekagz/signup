const mongoose = require("mongoose");

const NoteSchema ={
    title:String,
    content:String
}
const Note=mongoose.model("Note",NoteSchema);
module.exports=Note;