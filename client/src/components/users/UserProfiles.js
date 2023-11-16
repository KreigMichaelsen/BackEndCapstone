import { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import UserProfileList from "./UserProfileList";
import "./user.css"

export default function UserProfiles() {

  const navigate = useNavigate();

  return (
    <div className="userProfilesContainer">
      <h2>Users</h2>
      <div className="row">
        <div className="col-sm-8">
          <UserProfileList />
        </div>
      </div>
    </div>
  );
}