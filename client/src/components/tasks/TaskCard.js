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
import "./task.css"

import { BsTrash3Fill, BsFillCheckSquareFill, BsFillGearFill, BsPencilSquare} from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { completeTask, deleteTask } from "../../managers/projectTaskManager";

export default function TaskCard({ task, getAllTasks, project, getProjectDetails, getAllTasksForProject }) {
  const navigate = useNavigate();

  //^ Function to delete an order
  const deleteTaskFunction = (taskId) => {
    // Send an HTTP DELETE request to delete the work order
    deleteTask(taskId) // this says, run the deleteThisWorkOrder function on the selected OrderId, which will run the DELETE method on that object in the database
      .then(() => {
        getAllTasks();
      })
  };

    //^ Function to delete an order
    const completeTaskFunction = (taskId) => {
      // Send an HTTP DELETE request to delete the work order
      completeTask(taskId) // this says, run the deleteThisWorkOrder function on the selected OrderId, which will run the DELETE method on that object in the database
        .then(() => {
          getAllTasks();
        })
    };

  return (
    <Card className="taskCard"  color="dark" outline style={{ marginBottom: "4px" }}>
      <CardHeader className="taskCardHeader">
      {task.title}
      </CardHeader>
      <CardBody>
        <CardText>Completed? {task.isCompleted? "Yes" : "No"}</CardText>
        
        <Button
          color="secondary"
          onClick={() => {
            navigate(`/tasks/${task.id}`);
          }}
        >
          <BsFillGearFill />
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            navigate(`/tasks/${task.id}/edit`);
          }}
        >
         <BsPencilSquare />
        </Button>
        { task.isCompleted
            ? <><i className="fa-solid fa-check"></i> Done! </>
             :
             <Button
             onClick={() => completeTaskFunction(task.id)}
             color="success"
             style={{ marginLeft: "8px" }} // Add left margin for spacing
           >
             <BsFillCheckSquareFill />
           </Button>
        }

        <Button
          onClick={() => deleteTaskFunction(task.id)}
          color="danger"
          style={{ marginLeft: "8px" }} // Add left margin for spacing
        >
          <BsTrash3Fill />
        </Button>
      </CardBody>
    </Card>
  );
}
