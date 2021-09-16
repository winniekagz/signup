const express=require('express');
const router=express.Router();
// const createNote=require('../controlers/createNote')
const Note=require('../models/NoteModel');


router.route('/create').pos ((req,res) =>{
    const title = req.body.title;
    const content=req.body.content;
    const newNote= new Note({
        title,
        content
    })
    newNote.save();
})

module.exports=router;

