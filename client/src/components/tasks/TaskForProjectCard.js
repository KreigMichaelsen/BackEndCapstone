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
import { BsTrash3Fill, BsFillCheckSquareFill, BsFillGearFill} from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { completeTask, deleteTask } from "../../managers/projectTaskManager";

export default function TaskForProjectCard({ task, getAllTasks, project, getProjectDetails, getAllTasksForProject, getTasksForProject }) {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const toggleToolTip = () => setTooltipOpen(!tooltipOpen);

  //^ Function to delete an order
  const deleteTaskFunction = (taskId) => {
    // Send an HTTP DELETE request to delete the work order
    deleteTask(taskId) // this says, run the deleteThisWorkOrder function on the selected OrderId, which will run the DELETE method on that object in the database
      .then(() => {
        getTasksForProject(project.id);
        getAllTasksForProject(project.id);
        // getProjectDetails(project.id);
      })
  };

    //^ Function to delete an order
    const completeTaskFunction = (taskId) => {
      // Send an HTTP DELETE request to delete the work order
      completeTask(taskId) // this says, run the deleteThisWorkOrder function on the selected OrderId, which will run the DELETE method on that object in the database
        .then(() => {
          getTasksForProject(project.id);
          getAllTasksForProject(project.id);
          // getProjectDetails(project.id);
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
            //  style={{ backgroundColor: "pink" }}
              // Add left margin for spacing
           >
            <BsFillCheckSquareFill />
           </Button>
           <Tooltip
           isOpen={tooltipOpen}
           target="completeTaskCardForProjectButton"
           toggle={toggleToolTip}
         >
           Complete Task
         </Tooltip>
         </div>
        }
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret color="secondary">
        <BsFillGearFill />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => {
            navigate(`/tasks/${task.id}`);
          }}>Show Details</DropdownItem>
          <DropdownItem onClick={() => {
            navigate(`/tasks/${task.id}/edit`);
          }}>Edit</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
        {/* <Button
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
        </Button> */}
        

        <Button
          id="deleteTaskCardForProjectButton"
          className="deleteTaskCardForProjectButton"
          onClick={() => deleteTaskFunction(task.id)}
          color="danger"
          style={{ marginLeft: "8px" }} // Add left margin for spacing
        >
          <BsTrash3Fill />
        </Button>
        <Tooltip
           isOpen={tooltipOpen}
           target="deleteTaskCardForProjectButton"
           toggle={toggleToolTip}
         >
           Delete Task
         </Tooltip>
      </CardBody>
    </Card>
  );
}
