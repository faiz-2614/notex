import React,{useContext,useState} from "react";
import NotesContext from "../context/notes/NotesContext";

export const AddNote = (props) => {
  const context = useContext(NotesContext);
  const {addNote} = context;

  const handleAddClick = (event) => {
    event.preventDefault();
      addNote(note.title,note.description,note.tag);
      setnote({title:'',description:"",tag:""})
      props.showAlert("Note Added", "success")
  };

  const [note, setnote] = useState({title:'',description:"",tag:""})
  const onChange = (e) =>{
        setnote({...note,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <h1>Add a Note</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          value={note.title}
          className="form-control"
          id="title"
          name="title"
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
          id="description"
          rows="3"
          name="description"
          minLength={3}
          required
          value={note.description}
          onChange={onChange}
        ></textarea>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="tag"
          name="tag"
          value={note.tag}
          onChange={onChange}
        />
      </div>
        <button
          type="submit"
          onClick={handleAddClick}
          className="btn btn-dark"
          value={note.tag}
          disabled = { note.title.length<5 ||note.description.length<5 }
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddNote;
