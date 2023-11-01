import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button
} from "reactstrap";

import { BsTrash3Fill, BsFillCheckSquareFill, BsFillGearFill, BsPencilSquare} from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { deleteNote } from "../../managers/projectNoteManager";


export default function NoteCard({  note, getAllNotes }) {
  const navigate = useNavigate();

  //^ Function to delete an order
  const deleteNoteFunction = (noteId) => {
    // Send an HTTP DELETE request to delete the work order
    deleteNote(noteId) // this says, run the deleteThisWorkOrder function on the selected OrderId, which will run the DELETE method on that object in the database
      .then(() => {
        getAllNotes();
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
    <Card className="noteCard" color="dark" outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">{note.title}</CardTitle>
        <CardText>{note?.project?.title}</CardText>
        <CardText>{note.body}</CardText>
        <CardText>User: {note?.userProfile?.fullName}</CardText>
        
        {/* <Button
          color="dark"
          onClick={() => {
            navigate(`/tasks/${task.id}`);
          }}
        >
          Show Details
        </Button> */}
        <Button
          color="dark"
          onClick={() => {
            navigate(`/notes/${note.id}/edit`);
          }}
        >
          <BsPencilSquare />
        </Button>
        {/* { task.isCompleted
            ? <><i className="fa-solid fa-check"></i> Done! </>
             :
             <Button
             onClick={() => completeTaskFunction(task.id)}
             color="success"
             style={{ marginLeft: "8px" }} // Add left margin for spacing
           >
             Complete Task
           </Button>
        } */}

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