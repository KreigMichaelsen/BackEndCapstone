import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function ProjectCard({ project }) {
  return (
    <Card color="dark" outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">{project.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Category: {project.category.title}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}
