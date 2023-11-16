import React, { useState, useEffect } from "react";
import { getProjectTasks } from "../../managers/projectTaskManager";
import { Button } from "reactstrap";
import NoteCard from "./NoteCard";
import { getProjectNotes } from "../../managers/projectNoteManager";

export default function NoteList() {

  const [notes, setNotes] = useState([]);

  const getAllNotes = () => {
    getProjectNotes().then(setNotes);
  };

  useEffect(() => {
    getAllNotes();
  }, []);


  return (
    <>
      <div className="noteCardListContainer">
        {notes.map((note) => (
          <NoteCard
            note={note}
            key={note.id}
            getAllNotes={getAllNotes}
          ></NoteCard>
        ))}
      </div>
    </>
  );
}
