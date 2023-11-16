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
    deleteUserProject(userProjectId) 
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

        <Button
          onClick={() => deleteProjectFunction(userProject.id)}
          color="danger"
          style={{ marginLeft: "8px" }} 
        >
          Remove
        </Button>
      </CardBody>
    </Card>
  );
}