import { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText, Button } from "reactstrap";

import { useParams } from "react-router-dom";
import { editNote, getProjectNoteById } from "../../managers/projectNoteManager";


export default function NoteDetails() {
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const { id } = useParams();

  const getProjectNoteDetails = (id) => {
    getProjectNoteById(id).then(setNote);
  };

  useEffect(() => {
    getProjectNoteDetails(id);
    
  }, [id]);

  



  return (
    <>
      <h2>Note Details</h2>
      <Card color="dark" inverse>
        <CardBody>
          <CardTitle tag="h4">{note?.title}</CardTitle>
          <CardText>{note?.body}</CardText>
        </CardBody>
      </Card>
      
      {/* <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={note?.title}
          onChange={setTitle}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={note?.body}
          onChange={setBody}
        />
      </div>
      <Button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                    Save Changes
      </Button>
      */}

{/* <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
     
    </div> */}
    
    </>
  );
}