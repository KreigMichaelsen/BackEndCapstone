import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

import { useNavigate } from "react-router-dom";
import { deleteTask } from "../../managers/projectTaskManager";

export default function TaskCard({ task, getAllTasks, project, getProjectDetails }) {
  const navigate = useNavigate();

  //^ Function to delete an order
  const deleteTaskFunction = (taskId) => {
    // Send an HTTP DELETE request to delete the work order
    deleteTask(taskId) // this says, run the deleteThisWorkOrder function on the selected OrderId, which will run the DELETE method on that object in the database
      .then(() => {
        getProjectDetails(project.id);
      })
  };

  return (
    <Card color="dark" outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">{task.title}</CardTitle>
        <CardText>Completed? {task.isCompleted? "Yes" : "No"}</CardText>
        
        <Button
          color="dark"
          onClick={() => {
            navigate(`/tasks/${task.id}`);
          }}
        >
          Show Details
        </Button>
        <Button
          color="dark"
          onClick={() => {
            navigate(`/tasks/${task.id}/edit`);
          }}
        >
          Edit
        </Button>

        <Button
          onClick={() => deleteTaskFunction(task.id)}
          color="danger"
          style={{ marginLeft: "8px" }} // Add left margin for spacing
        >
          Delete Task
        </Button>
      </CardBody>
    </Card>
  );
}
