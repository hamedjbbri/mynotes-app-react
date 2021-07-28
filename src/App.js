import { useState } from 'react';
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList";
import AddNote from './components/AddNote';


const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "25/01/2020"  
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "5/04/2022"  
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "13/06/2021"  
    },
    {
      id: nanoid(),
      text: "This is my forth note!",
      date: "13/07/2019"  
    }
]);

const addNote = (text) => {
   const date = new Date();
   const newNote = {
     id: nanoid(),
     text: text, 
     date: date.toLocaleDateString()
   }
   const newNotes = [...notes, newNote];
   setNotes(newNotes);
};


  return <div className="container">
        <NotesList notes={notes} handleAddNote={addNote} />    
    </div>;
}

export default App;