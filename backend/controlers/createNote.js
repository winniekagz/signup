const Note=require("../models/NoteModel")

module.exports=async function createNote(title,content,budget){
    try{
        const existingNote=await Note.findOne({title:title})
        if (existingNote) throw new Error(`a note with title ${title} exists!`)

        const newNote=new Note({
            title,
            content,
            cost:budget
        })
        await newNote.save()
        return{
            noteId:newNote._id
        }

    }
    catch (err){
        throw err
    }
}