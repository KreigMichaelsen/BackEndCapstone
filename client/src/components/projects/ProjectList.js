import { useState, useEffect } from "react";
import { getProjects } from "../../managers/projectManager";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    getProjects().then(setProjects);
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <>
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectCard
          project={project}
          key={`project-${project.id}`}
        ></ProjectCard>
      ))}
    </>
  );
}
