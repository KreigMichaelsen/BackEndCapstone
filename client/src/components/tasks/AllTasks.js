import { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import AllTaskList from "./AllTaskList.js";

export default function AllTasks() {

  const navigate = useNavigate();

  return (
    <div className="allTasksContainer">
      <h2>All Tasks</h2>
       <Button
          color="dark"
          onClick={() => {
            navigate(`/tasks/create`)
          }}
        >
          Create Task
        </Button>
      <div className="row">
        <div className="col-sm-8">
          <AllTaskList />
        </div>
      </div>
    </div>
  );
}