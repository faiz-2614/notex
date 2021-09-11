import React,{ useContext } from 'react'
import NotesContext from '../context/notes/NotesContext'


const About = () => {

    const a = useContext(NotesContext)
    return (
        <div>
            <h1>This is about {a.a}</h1>
            
        </div>
    )
}

export default About;
