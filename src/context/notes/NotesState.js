import React,{useState} from "react";
import NotesContext from "./NotesContext";

const NotesState = (props) => {
    const notesInitial=[
        {
          "_id": "613ab705276b0750105d7478",
          "user": "613a3212d951ffb10c167896",
          "title": "My Title",
          "description": "aasddsaf",
          "tag": "sdfvfdf",
          "date": "1631237893549",
          "__v": 0
        },
        {
          "_id": "613b6b038ac26ec85fe35daa",
          "user": "613a3212d951ffb10c167896",
          "title": "My Title",
          "description": "aasddsaf",
          "tag": "sdfvfdf",
          "date": "1631283971972",
          "__v": 0
        },
        {
          "_id": "613cca64fe0fff4f5f201dc2",
          "user": "613a3212d951ffb10c167896",
          "title": "My Title3",
          "description": "aasddsaf",
          "tag": "sdfvfdf",
          "date": "1631373924327",
          "__v": 0
        },
        {
          "_id": "613cca64fe0fff4f5f201dc4",
          "user": "613a3212d951ffb10c167896",
          "title": "My Title3",
          "description": "aasddsaf",
          "tag": "sdfvfdf",
          "date": "1631373924668",
          "__v": 0
        },
        {
          "_id": "613cca66fe0fff4f5f201dc6",
          "user": "613a3212d951ffb10c167896",
          "title": "My Title3",
          "description": "aasddsaf",
          "tag": "sdfvfdf",
          "date": "1631373926362",
          "__v": 0
        }
      ]

    const [notes, setnotes] = useState(notesInitial)

    const addNote = (title, description, tag) =>{
        const note = {
            "_id": "613cca66fe0fff4dc6",
            "user": "613a3212d951ffb10c167896",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "1631373926362",
            "__v": 0
          }
        setnotes(notes.concat(note))
    }

    const deleteNote = (id) =>{
      const newnotes = notes.filter((note)=>{
        return note._id !== id;
      })
        setnotes(newnotes)
    }

    const editNote = (id,title,descrption, tag) =>{
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id === id){
            element.title =title;
            element.description=descrption;
            element.tag=tag;
          }
          
        }
    }

    return(
        <NotesContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NotesContext.Provider>
    )
}


export default NotesState;