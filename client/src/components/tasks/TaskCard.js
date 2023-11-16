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

  const deleteTaskFunction = (taskId) => {
    deleteTask(taskId) 
      .then(() => {
        getAllTasks();
      })
  };

    
    const completeTaskFunction = (taskId) => {
      completeTask(taskId)  
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
             style={{ marginLeft: "8px" }} 
           >
             <BsFillCheckSquareFill />
           </Button>
        }
        <Button className="taskCardDetailsButton"
          
          onClick={() => {
            navigate(`/tasks/${task.id}`);
          }}
        >
          <BsFillGearFill />
        </Button>
        <Button className="taskCardEditButton"
          
          onClick={() => {
            navigate(`/tasks/${task.id}/edit`);
          }}
        >
         <BsPencilSquare />
        </Button>
        <Button
          onClick={() => deleteTaskFunction(task.id)}
          color="danger"
          style={{ marginLeft: "8px" }} 
        >
          <BsTrash3Fill />
        </Button>
      </CardBody>
    </Card>
  );
}
