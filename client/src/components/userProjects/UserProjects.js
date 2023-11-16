import { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import UserProjectList from "./UserProjectList";
import "./userProject.css"

export default function UserProjects() {

  const navigate = useNavigate();

  return (
    <div className="userProjectsContainer">
      <div className="row">
      <h2>User Projects</h2>
      <div className="col-sm-8">
        </div>
        <div className="col-sm-8">
          <UserProjectList />
        </div>
      </div>
    </div>
  );
}
