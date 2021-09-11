import React,{useContext} from "react";
import NotesContext from "../context/notes/NotesContext";


export const NoteItem = (props) => {
  const context = useContext(NotesContext);
  const {deleteNote} = context;
  return (
    <div className="col-md-3 my-3 ">
      <div className="card">
        <div className="card-body">
          <div className=" d-flex  justify-content-around">
            <h5 className="card-title">{props.note.title}</h5>
            <div>
              <i className="fas fa-trash mx-2" onClick={()=>{deleteNote(props.note._id)}}></i>
              <i className="fas fa-edit mx-2"></i>
            </div>
          </div>

          <p className="card-text">{props.note.description}</p>
          <h5 className="card-title">{props.note.tag}</h5>
        </div>
      </div>
    </div>
  );
};
