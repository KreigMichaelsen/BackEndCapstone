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
  // const [completionTooltipOpen, setCompletionTooltipOpen] = useState(false);
  // const [detailsTooltipOpen, setDetailsTooltipOpen] = useState(false);
  // const [editTooltipOpen, setEditTooltipOpen] = useState(false);
  // const [deleteTooltipOpen, setDeleteTooltipOpen] = useState(false);
  
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  // const toggleCompletionToolTip = () => setCompletionTooltipOpen(!completionTooltipOpen);
  // const toggleDetailsToolTip = () => setDetailsTooltipOpen(!detailsTooltipOpen);
  // const toggleEditToolTip = () => setEditTooltipOpen(!editTooltipOpen);
  // const toggleDeleteToolTip = () => setDeleteTooltipOpen(!deleteTooltipOpen);


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
             color="warning"
              // Add left margin for spacing
           >
            <BsFillCheckSquareFill />
           </Button>
           {/* <Tooltip
           isOpen={completionTooltipOpen}
           target="completeTaskCardForProjectButton"
           toggle={toggleCompletionToolTip}
         >
           Complete Task
         </Tooltip> */}
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
        {/* <Tooltip
           isOpen={deleteTooltipOpen}
           target="deleteTaskCardForProjectButton"
           toggle={toggleDeleteToolTip}
         >
           Delete Task
         </Tooltip> */}
      </CardBody>
    </Card>
  );
}
