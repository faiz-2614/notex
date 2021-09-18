import React, { useContext, useState,useEffect, useRef } from "react";
import NotesContext from "../context/notes/NotesContext";
import AddNote from "./AddNote";

import { NoteItem } from "./NoteItem";

export const Notes = () => {
  const context = useContext(NotesContext);
  const { notes, getNotes,editNote } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  },[]);
  
// eslint-disable-next-line
  const ref = useRef(null);
  const refClose = useRef();

  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({id:currentNote._id ,etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
  };

  const [note, setnote] = useState({id:'',etitle:'',edescription:"",etag:""})

  const handleClick = (event) => {
    console.log("updating", note)
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
  };

  const onChange = (e) =>{
    
        setnote({...note,[e.target.name]:e.target.value})
  }

  return (
    <>
      <AddNote />
      <button type="button" ref ={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      
      
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="etitle"
          value ={note.etitle}
          name="etitle"
          onChange={onChange}
          minLength={3}
          required
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        >
          Notes
        </label>
        <textarea
          className="form-control"
          id="edescription"
          rows="3"
          value ={note.edescription}
          name="edescription"
          onChange={onChange}
          minLength={5}
          required
        ></textarea>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="etag"
          value ={note.etag}
          name="etag"
          onChange={onChange}
        />
      </div>
        
      </div>
            </div>
            <div className="modal-footer">
              <button ref= {refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button  disabled = { note.etitle.length<5 ||note.edescription.length<5 } type="button" onClick={handleClick} className="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container">
          {notes.length ===0 && "No Notes To Display"}
        </div>
        
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};
