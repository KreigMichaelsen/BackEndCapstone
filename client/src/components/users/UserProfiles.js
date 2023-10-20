import { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import UserProfileList from "./UserProfileList";


export default function UserProfiles() {

  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Users</h2>
       {/* <Button
          color="dark"
          onClick={() => {
            navigate(`/tasks/create`)
          }}
        >
          Create Task
        </Button> */}
      <div className="row">
        <div className="col-sm-8">
          <UserProfileList />
        </div>
      </div>
    </div>
  );
}