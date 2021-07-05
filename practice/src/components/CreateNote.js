import React, { useState } from 'react';
import axios from "axios";

export default function CreateNote() {
    const [input ,setInput]=useState({
        title:"",
        content:"",
    })
    function handleChange(event){
        const {name,value}=event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]:value
            }
        })

    }

function handleClick(event){
    event.preventDefault();
    const newNote ={
        title:input.title,
        content:input.content
    }
    
    axios.post('http://localhost:4001/create',newNote)
}

    return (
        <div className="container">
            <h1>create Note pahe</h1>
            <form>
                <div className="form-group">
                    <input onChange={handleChange} name="title"  autoComplete="off" className="form-control" placeholder='title'></input>
                </div>
                <div className="form-group">
                    <textarea onChange={handleChange} name="content"  autoComplete="off" className="form-control " placeholder='content'></textarea>
                </div>
                <button onClick={handleClick} className='btn btn-lg btn-info '>Add Note</button>
            </form>
        </div>
    )
}
