import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  CardHeader,
} from "reactstrap";
import { BsTrash3Fill, BsFillCheckSquareFill, BsFillGearFill, BsPencilSquare} from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { deleteNote } from "../../managers/projectNoteManager";


export default function NoteForProjectCard({  note, getAllNotes, getAllNotesForProject, project }) {
  const navigate = useNavigate();

  //^ Function to delete an order
  const deleteNoteFunction = (noteId) => {
    // Send an HTTP DELETE request to delete the work order
    deleteNote(noteId) // this says, run the deleteThisWorkOrder function on the selected OrderId, which will run the DELETE method on that object in the database
      .then(() => {
        getAllNotesForProject(project.id);
      })
  };

//     //^ Function to delete an order
//     const completeTaskFunction = (taskId) => {
//       // Send an HTTP DELETE request to delete the work order
//       completeTask(taskId) // this says, run the deleteThisWorkOrder function on the selected OrderId, which will run the DELETE method on that object in the database
//         .then(() => {
//           getAllTasks();
//         })
//     };

  return (
    <Card className="noteForProjectCard"color="dark" outline style={{ marginBottom: "4px" }}>
      <CardHeader className="noteForProjectCardHeader" onClick={() => {
      navigate(`/notes/${note.id}/edit`);
    }}>
      {note.title}
      </CardHeader>
      <CardBody>
        <CardText className="noteForProjectCardBody">{note.body}</CardText>
        <CardText>Created By: {note?.userProfile?.firstName}</CardText>
        
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
          style={{ marginLeft: "8px" }} // Add left margin for spacing
        >
           <BsTrash3Fill />
        </Button>
      </CardBody>
    </Card>
  );
}