import React from "react";
import { Card, CardBody, CardText, Button, CardHeader, Badge } from "reactstrap";
import { BsTrash3Fill, BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../../managers/projectNoteManager";


export default function NoteForProjectCard({  note, getAllNotes, getAllNotesForProject, project }) {
  const navigate = useNavigate();

  const deleteNoteFunction = (noteId) => {
    deleteNote(noteId) 
      .then(() => {
        getAllNotesForProject(project.id);
      })
  };

  return (
    <Card className="noteForProjectCard"color="dark" outline style={{ marginBottom: "4px" }}>
      <CardHeader className="noteForProjectCardHeader" onClick={() => {
      navigate(`/notes/${note.id}/edit`);
    }}>
      {note.title}
      </CardHeader>
      <CardBody>
        <CardText className="noteForProjectCardBody">{note.body}</CardText>
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