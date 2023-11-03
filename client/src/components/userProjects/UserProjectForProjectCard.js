import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  Progress,
  CardHeader,
} from "reactstrap";

import { deleteUserProject, getUserProjectsByProjectId } from "../../managers/userProjectManager";

export default function UserProjectForProjectCard({ userProject, getAllUserProjects, getProjectDetails, project, getAllUsersForProject }) {

  const deleteProjectFunction = (userProjectId) => {
    // Send an HTTP DELETE request to delete the work order
    deleteUserProject(userProjectId) // this says, run the deleteThisWorkOrder function on the selected OrderId, which will run the DELETE method on that object in the database
      .then(() => {
        getAllUsersForProject(project.id);
      })
  };

  const navigate = useNavigate();
  return (
    <Card className="userProjectForProjectCard" color="dark" outline style={{ marginBottom: "4px" }}>
       <CardHeader className="userProjectForProjectCardHeader" onClick={() => {
      navigate(`/users/${userProject?.userProfileId}`);
      }}>
      {userProject?.userProfile?.fullName}
      </CardHeader>
      <CardBody>
        {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
         Id: {userProject?.id}
        </CardSubtitle> */}

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