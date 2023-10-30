import { useState, useEffect } from "react";
import { getProjects } from "../../managers/projectManager";
import ProjectCard from "./ProjectCard";

export default function AllProjectList() {
  const [projects, setProjects] = useState([]);


  const getAllProjects = () => {
    getProjects().then(setProjects);
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
        >
        </ProjectCard>
      ))}
    </>
  );
}
