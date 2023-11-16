import { Link, useNavigate } from "react-router-dom";
import {Card,CardBody,CardText,Button,CardHeader,Badge} from "reactstrap";
import "./project.css"
import { BsTrash3Fill, BsFillCheckSquareFill, BsFillGearFill, BsPencilSquare} from "react-icons/bs";
import { deleteProject } from "../../managers/projectManager";

export default function ProjectCard({ project, getAllProjects }) {

  const deleteProjectFunction = (id) => {
    deleteProject(id)
      .then(() => {
        getAllProjects();
      })
  };

  const navigate = useNavigate();
  return (
    <Card className="projectCard" color="dark" outline style={{ marginBottom: "4px" }}>
      <CardHeader className="projectCardHeader" onClick={() => {
      navigate(`/projects/${project.id}`);
    }}>
      {project.title}
      </CardHeader>
      <CardBody>
        <CardText>
            Category:  
            <Badge className="projectCategoryPillBadge"
            color="warning"
            pill
            >
            {project?.category?.title}
          </Badge>
          </CardText>
        <Button
          className="projectCardDetailsButton"
          // color="dark"
          onClick={() => {
            navigate(`/projects/${project.id}`);
          }}
        > 
          Show Details
        </Button>
        <Button
          className="projectCardEditButton"
          // color="secondary"
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
          style={{ marginLeft: "8px" }} 
        >
          <BsTrash3Fill />
        </Button>
      </CardBody>
    </Card>
  );
}
