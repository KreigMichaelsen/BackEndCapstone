import { useState } from "react";
import ProjectList from "./ProjectList";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import AllProjectList from "./AllProjectList";

export default function AllProjects() {

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
      <h2>All Projects</h2>
      <div className="col-sm-8">
      <Button
          color="dark"
          onClick={() => {
            navigate(`/projects/create`)
          }}
        >
          Create Project
        </Button>
        </div>
        <div className="col-sm-8">
          <AllProjectList />
        </div>
      </div>
    </div>
  );
}