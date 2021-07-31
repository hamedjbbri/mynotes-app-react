import { useState } from 'react';
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList";
import Search from './components/Search' 

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


const [searchText, setSearchText] = useState('');

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

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
}

  return (
    <div className="container">
        <Search handleSearchNote={setSearchText} />
        <NotesList 
          notes={notes.filter((note) =>
             note.text.toLowerCase().includes(searchText)
            )} 
          handleAddNote={addNote} 
          handleDeleteNote={deleteNote}
        />    
    </div>
    );
};

export default App;