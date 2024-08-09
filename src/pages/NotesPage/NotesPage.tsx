import { useState } from 'react';
import Notes from '../../component/Notes/Notes';
import styles from './NotesPage.module.css';
import TabBar from '../../component/TabBar/TabBar';
import ControlNotes from '../../component/ControlNotes/ControlNotes';
import { noteType } from '../../utils/types';
import { v4 as uuid } from 'uuid'

const NotesPage = () => {
  const [notesList, setNotesList] = useState<noteType[]>([]);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null)

  const updateNote = (id: string, updatedText: string) => {
    setNotesList((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, bodyText: updatedText } : note
      )
    );
  };
  const handleAddNote = () => {
    const newId = uuid()
    setNotesList([...notesList, { bodyText: '', colorId: 0, id: newId, position: { x: 200, y: 200 }, zIndex: notesList.length + 1 }]);
    setSelectedNoteId(newId)
  };
  const updateNoteColor = (colorIndex: number) => {
    if (selectedNoteId) {
      setNotesList((prevNotes) =>
        prevNotes.map((note) =>
          note.id === selectedNoteId ? { ...note, colorId: colorIndex } : note
        )
      );
    }
  };

  const handleFocusNote = (id: string) => {
    setNotesList((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, zIndex: notesList.length } : { ...note, zIndex: note.zIndex > 0 ? note.zIndex - 1 : 0 }
      )
    );
    setSelectedNoteId(id);
  };
  const handleDelete = (id: string) => {
    const updatedItems = notesList.filter((item) => item.id !== id);
    setNotesList(updatedItems);
    setSelectedNoteId(null);
  };



  return (
    <div className={styles.container}>
      <TabBar notesList={notesList}
        handleDelete={handleDelete}
        handleFocusNote={handleFocusNote} selectedNoteId={selectedNoteId} />
      {/* <button style={{marginTop:100}} onClick={()=>{console.log(notesList)}}> helo</button> */}
      <ControlNotes handleAddNote={handleAddNote} updateNoteColor={updateNoteColor} />
      {notesList.map((noteData) => (
        <Notes
          handleDelete={handleDelete}
          key={noteData.id} noteData={noteData} onUpdateNote={updateNote} handleFocusNote={handleFocusNote} />
      ))}
    </div>
  );
};

export default NotesPage;


