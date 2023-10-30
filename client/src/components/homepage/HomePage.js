import { useState } from "react";

import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Projects from "../projects/Projects";
import Tasks from "../tasks/Tasks";

export default function HomePage({loggedInUser}) {

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
      <h2>Hello, {loggedInUser.firstName}!</h2>
      <div className="col-sm-8">
      
        </div>
        <Projects loggedInUser={loggedInUser}/>
        <Tasks loggedInUser={loggedInUser}/>
      </div>
    </div>
  );
}
