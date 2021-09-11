import React, { useContext } from "react";
import NotesContext from "../context/notes/NotesContext";
import { NoteItem } from "./NoteItem";

export const Notes = () => {
  const context = useContext(NotesContext);
  const { notes, setnotes } = context;
  return (
    <div className="row my-3 mx-3">
      {notes.map((note) => {
        return (
        
            <NoteItem note={note} />
        
        );
      })}
    </div>
  );
};
