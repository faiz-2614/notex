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

    return(
        <NotesContext.Provider value={{notes,setnotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}


export default NotesState;