import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  Progress,
  CardHeader,
  Badge,
} from "reactstrap";
import "./project.css"
import { BsTrash3Fill, BsFillCheckSquareFill, BsFillGearFill, BsPencilSquare} from "react-icons/bs";
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
    <Card className="projectCard" color="dark" outline style={{ marginBottom: "4px" }}>
      <CardHeader className="projectCardHeader">
      {project.title}
      </CardHeader>
      <CardBody  
      // onClick={() => {navigate(`/projects/${project.id}`)}}
          >
        <CardText>
            Category:  
            <Badge className="projectCategoryPillBadge"
            color="warning"
            pill
            >
            {project?.category?.title}
          </Badge>
          </CardText>
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
          className="projectCardEditButton"
          color="secondary"
          onClick={() => {
            navigate(`/projects/${project.id}/edit`);
          }}
        >
        <BsPencilSquare />
        </Button>
        <Button
          className="projectCardDeleteButton"
          onClick={() => deleteProjectFunction(project.id)}
          color="danger"
          style={{ marginLeft: "8px" }} // Add left margin for spacing
        >
          <BsTrash3Fill />
        </Button>
      </CardBody>
    </Card>
  );
}
