import React from "react";
import { Card, CardBody, CardText, Button, CardHeader, Badge } from "reactstrap";
import { BsTrash3Fill, BsPencilSquare} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../../managers/projectNoteManager";


export default function NoteCard({  note, getAllNotes }) {
  const navigate = useNavigate();

  const deleteNoteFunction = (noteId) => {
    deleteNote(noteId)  
      .then(() => {
        getAllNotes();
      })
  };


  return (
    <Card className="noteCard" color="dark" outline style={{ marginBottom: "4px" }}>
       <CardHeader className="noteCardHeader" onClick={() => {
      navigate(`/notes/${note.id}/edit`);
    }}>
      {note.title}
      </CardHeader>
      <CardBody>
        <CardText>{note?.project?.title}</CardText>
        <CardText>{note.body}</CardText>
        <CardText>
        Created By:  
            <Badge className="projectCategoryPillBadge"
            color="warning"
            pill
            >
          {note?.userProfile?.firstName}
          </Badge>
          </CardText>
        
        <Button
          color="dark"
          onClick={() => {
            navigate(`/notes/${note.id}/edit`);
          }}
        >
          <BsPencilSquare />
        </Button>

        <Button
          onClick={() => deleteNoteFunction(note.id)}
          color="danger"
          style={{ marginLeft: "8px" }} 
        >
          <BsTrash3Fill />
        </Button>
      </CardBody>
    </Card>
  );
}