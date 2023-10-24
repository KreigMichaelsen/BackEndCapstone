import { useState, useEffect } from "react";

import UserProjectCard from "./UserProjectCard";
import { getUserProjects } from "../../managers/userProjectManager";


export default function UserProjectList() {
  const [userProjects, setUserProjects] = useState([]);


  const getAllUserProjects = () => {
    getUserProjects().then(setUserProjects);
  };

  useEffect(() => {
    getAllUserProjects();
  }, []);

  return (
    <>
      
      {userProjects.map((userProject) => (
        <UserProjectCard
        userProject={userProject}
          key={`userProject-${userProject.id}`}
          getAllUserProjects={getAllUserProjects}
        >
        </UserProjectCard>
      ))}
    </>
  );
}