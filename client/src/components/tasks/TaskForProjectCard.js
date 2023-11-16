import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Tooltip,
  Badge,
  CardHeader,
} from "reactstrap";
import "./task.css"
import { BsTrash3Fill, BsFillCheckSquareFill, BsFillGearFill, BsPencilSquare } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { completeTask, deleteTask } from "../../managers/projectTaskManager";

export default function TaskForProjectCard({ task, getAllTasks, project, getProjectDetails, getAllTasksForProject, getTasksForProject }) {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggle = () => setDropdownOpen((prevState) => !prevState);

 
  const deleteTaskFunction = (taskId) => {
    deleteTask(taskId)  
      .then(() => {
        getTasksForProject(project.id);
        getAllTasksForProject(project.id);
      })
  };

    const completeTaskFunction = (taskId) => {
      completeTask(taskId)  
        .then(() => {
          getTasksForProject(project.id);
          getAllTasksForProject(project.id);
        })
    };

  return (
    <Card className="taskForProjectCard" color="dark" outline style={{ marginBottom: "4px" }}>
      <CardHeader className="taskForProjectCardHeader">{task.title}</CardHeader>
      <CardBody>
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
             <div>
             <Button
             id="completeTaskCardForProjectButton"
             className="completeTaskCardForProjectButton"
             onClick={() => completeTaskFunction(task.id)}
             color="warning"
              // Add left margin for spacing
           >
            <BsFillCheckSquareFill />
           </Button>
         </div>
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
          id="deleteTaskCardForProjectButton"
          className="deleteTaskCardForProjectButton"
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
