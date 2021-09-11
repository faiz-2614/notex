import React,{useState} from "react";
import NotesContext from "./NotesContext";

const NotesState = (props) => {
    const s1={
        "a": "44"
    }

    const [state, setstate] = useState(s1)

    return(
        <NotesContext.Provider value={{state, setstate}}>
            {props.children}
        </NotesContext.Provider>
    )
}


export default NotesState;