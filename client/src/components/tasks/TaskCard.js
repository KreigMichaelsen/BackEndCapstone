import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  CardHeader,
  Badge,
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
      <CardHeader className="taskCardHeader" onClick={() => {
            navigate(`/tasks/${task.id}`);
          }}>
      {task?.title}
      </CardHeader>
      <CardBody>
      <CardText>Project: {task?.project?.title}</CardText>
      <CardText>
            Category:  
            <Badge className="projectCategoryPillBadge"
            color="warning"
            pill
            >
            {task?.category?.title}
          </Badge>
      </CardText>
        { task.isCompleted
            ? <><i className="fa-solid fa-check"></i> Done! </>
             :
             <Button
             onClick={() => completeTaskFunction(task.id)}
             color="warning"
             style={{ marginLeft: "8px" }} // Add left margin for spacing
           >
             <BsFillCheckSquareFill />
           </Button>
        }
        <Button className="taskCardDetailsButton"
          // color="secondary"
          onClick={() => {
            navigate(`/tasks/${task.id}`);
          }}
        >
          <BsFillGearFill />
        </Button>
        <Button className="taskCardEditButton"
          // color="secondary"
          onClick={() => {
            navigate(`/tasks/${task.id}/edit`);
          }}
        >
         <BsPencilSquare />
        </Button>
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
