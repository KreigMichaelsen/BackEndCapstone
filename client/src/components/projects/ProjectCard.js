import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  Progress,
} from "reactstrap";
import { deleteProject } from "../../managers/projectManager";

export default function ProjectCard({ project, getAllProjects }) {

  const deleteProjectFunction = (id) => {
    // Send an HTTP DELETE request to delete the work order
    deleteProject(id) // this says, run the deleteThisWorkOrder function on the selected OrderId, which will run the DELETE method on that object in the database
      .then(() => {
        getAllProjects();
      })
  };

  const navigate = useNavigate();
  return (
    <Card color="dark" outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">{project.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Category: {project?.category?.title}
        </CardSubtitle>

        {/* <Progress
        value={36}
        /> */}
        <Button
          color="dark"
          onClick={() => {
            navigate(`/projects/${project.id}`);
          }}
        >
          Show Details
        </Button>
        <Button
          onClick={() => deleteProjectFunction(project.id)}
          color="danger"
          style={{ marginLeft: "8px" }} // Add left margin for spacing
        >
          Delete Project
        </Button>
      </CardBody>
    </Card>
  );
}
