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

import { deleteUserProject } from "../../managers/userProjectManager";

export default function UserProjectCard({ userProject, getAllUserProjects, getProjectDetails, project }) {

  const deleteProjectFunction = (userProjectId) => {
    // Send an HTTP DELETE request to delete the work order
    deleteUserProject(userProjectId) // this says, run the deleteThisWorkOrder function on the selected OrderId, which will run the DELETE method on that object in the database
      .then(() => {
        getProjectDetails(project.id);
      })
  };

  const navigate = useNavigate();
  return (
    <Card color="dark" outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">{userProject?.userProfile?.fullName}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
         Id: {userProject?.id}
        </CardSubtitle>

        <Button
          onClick={() => deleteProjectFunction(userProject.id)}
          color="danger"
          style={{ marginLeft: "8px" }} // Add left margin for spacing
        >
          Remove
        </Button>
      </CardBody>
    </Card>
  );
}
