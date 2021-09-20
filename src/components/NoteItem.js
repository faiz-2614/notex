import React,{useContext} from "react";
import NotesContext from "../context/notes/NotesContext";


export const NoteItem = (props) => {
  const context = useContext(NotesContext);
  const {deleteNote} = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3 my-3 ">
      <div className="card">
        <div className="card-body">
          <div className=" d-flex  justify-content-around">
            <h5 className="card-title">{note.title}</h5>
            <div>
              <i className="fas fa-trash mx-2" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted Successfully", "success")}}></i>
              <i className="fas fa-edit mx-2"onClick={()=>{updateNote(note)}}></i>
            </div>
          </div>

          <p className="card-text">{note.description}</p>
          <h5 className="card-title">{note.tag}</h5>
        </div>
      </div>
    </div>
  );
};
