import { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText } from "reactstrap";
import { getProjectById } from "../../managers/projectManager";
import { useParams } from "react-router-dom";


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
      <h2>Project Details</h2>
      <Card color="dark" inverse>
        <CardBody>
          <CardTitle tag="h4">{project?.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Category: {project?.category?.title}</CardText>
          <CardText>DueDate: {project?.dueDate}</CardText>
        </CardBody>
      </Card>
     
    
    </>
  );
}
