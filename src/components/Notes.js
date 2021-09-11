import React, { useContext } from "react";
import NotesContext from "../context/notes/NotesContext";
import AddNote from "./AddNote";
import { NoteItem } from "./NoteItem";

export const Notes = () => {
  const context = useContext(NotesContext);
  const { notes } = context;
  return (
      <>
    <AddNote/>
    <div className="row my-3">
    <h1>Your Notes</h1>
      {notes.map((note) => {
        return (
            <NoteItem key= {note._id} note={note} />
        );
      })}
    </div>
    </>
  );
};
