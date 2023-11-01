import { useState, useEffect } from "react";
import { getProjects, getProjectsByUserId } from "../../managers/projectManager";
import ProjectCard from "./ProjectCard";

export default function ProjectList({loggedInUser}) {
  const [projects, setProjects] = useState([]);

  const Id = loggedInUser.id;
  const getAllProjects = () => {
    getProjectsByUserId(Id).then(setProjects);
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <>
      
      {projects.map((project) => (
        <ProjectCard
          project={project}
          key={`project-${project.id}`}
          getAllProjects={getAllProjects}
          loggedInUser={loggedInUser}
        >
        </ProjectCard>
      ))}
    </>
  );
}
