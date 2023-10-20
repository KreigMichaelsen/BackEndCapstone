import { useState, useEffect } from "react";
import { getProjects } from "../../managers/projectManager";
import UserProfileCard from "./UserProfileCard";
import { getUsers } from "../../managers/userProfileManager";

export default function UserProfileList() {
  const [users, setUsers] = useState([]);


  const getAllUsers = () => {
    getUsers().then(setUsers);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      
      {users.map((user) => (
        <UserProfileCard
          user={user}
          key={`userProfile-${user.id}`}
          getAllUsers={getAllUsers}
        >
        </UserProfileCard>
      ))}
    </>
  );
}