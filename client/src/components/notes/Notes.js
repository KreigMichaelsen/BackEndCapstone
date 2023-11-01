import { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import NoteList from "./Notelist.js";
import "./note.css"

export default function Notes() {

  const navigate = useNavigate();

  return (
    <div className="myNotesContainer">
      <h2>Project Notes</h2>
       <Button
          color="dark"
          onClick={() => {
            navigate(`/notes/create`)
          }}
        >
          Create Note
        </Button>
      <div className="row">
        <div className="col-sm-8">
          <NoteList />
        </div>
      </div>
    </div>
  );
}