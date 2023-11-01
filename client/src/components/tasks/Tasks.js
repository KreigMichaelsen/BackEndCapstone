import { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import TaskList from "./TaskList.js";
import "./task.css"

export default function Tasks({loggedInUser}) {

  const navigate = useNavigate();

  return (
    <div className="myTasksContainer">
      <h2>My Tasks</h2>
      <TaskList loggedInUser={loggedInUser}/>
    </div>
  );
}
