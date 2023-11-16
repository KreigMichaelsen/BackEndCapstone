import { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Projects from "../projects/Projects";
import Tasks from "../tasks/Tasks";
import "./homePage.css"

export default function HomePage({loggedInUser}) {

  const navigate = useNavigate();

  return (
    <div className="homePageContainer">
      <h2>Hello, {loggedInUser.firstName}!</h2>
      <div className="homePageContentContainer">
        <Projects loggedInUser={loggedInUser}/>
        <Tasks loggedInUser={loggedInUser}/>
        </div>
    </div>
  );
}
