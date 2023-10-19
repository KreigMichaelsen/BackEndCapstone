import { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText, Progress } from "reactstrap";
import { getProjectById } from "../../managers/projectManager";
import { useParams } from "react-router-dom";
import TaskCard from "../tasks/TaskCard";


export default function ProjectDetails() {
  const [project, setProject] = useState(null);

  const { id } = useParams();

  const getProjectDetails = (id) => {
    getProjectById(id).then(setProject);
  };

  useEffect(() => {
      getProjectDetails(id);
    
  }, [id]);




  return (
    <>
      <h1>{project?.title}</h1>
      <Card color="dark" inverse>
        <CardBody>
          <CardTitle tag="h4">Details</CardTitle>
          {/* <Progress
          value={36}
          /> */}
          
          <CardText>Category: {project?.category?.title}</CardText>
          <CardText>DueDate: {project?.dueDate}</CardText>
          <CardTitle tag="h4">Users</CardTitle>
          <div>
            {project?.userProjects?.map((userProject) => (
                <p key={userProject?.userProfile?.id}>
                  {userProject?.userProfile?.fullName}
                </p>
                
                
            ))}
          </div>
            
        </CardBody>
      </Card>
      <h4>Tasks</h4>
      {project?.projectTasks?.map((task) => (
        <TaskCard
        task={task}
        key={task.id}
        >
        </TaskCard>
      ))}
    
    </>
  );
}
