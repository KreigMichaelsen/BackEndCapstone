import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function ProjectCard({ project }) {

  const navigate = useNavigate();
  return (
    <Card color="dark" outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">{project.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Category: {project.category.title}
        </CardSubtitle>
        <Button
          color="dark"
          onClick={() => {
            navigate(`/projects/${project.id}`);
          }}
        >
          Show Details
        </Button>
      </CardBody>
    </Card>
  );
}
