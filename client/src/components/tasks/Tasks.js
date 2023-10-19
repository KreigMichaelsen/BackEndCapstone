import { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import TaskList from "./TaskList.js";

export default function Tasks() {

  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Tasks</h2>
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
          <TaskList />
        </div>
      </div>
    </div>
  );
}
