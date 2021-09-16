const db = require('./db')
// const createNote= require('../controlers/createNote')
const  Note= require('../models/NoteModel')


// beforeAll(async () => await db.connect())
// afterEach(async () => await db.clearDatabase())
// afterAll(async () => await db.closeDatabase())

describe(" Notes created  when",()=>{
    it("First Note",async done=>{
        // const {noteId} = await createNote("winfred","kagfg","$$")
        // finf note from dbpath
        // const note= await Note.findById(noteId)

        // check the title etc
        expect(note.title).toEqual("winfred")
        expect(note.content).toEqual("kagfg")
        // expect(note.cost).toEqual("$$")
        done()

    })
})