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
import { deleteProject } from "../../managers/projectManager";

export default function UserProfileCard({ user, getAllUsers }) {


  const navigate = useNavigate();

  return (
    <Card className="userProfileCard" color="dark" outline style={{ marginBottom: "4px" }}>
      <CardHeader className="userProfileCardHeader" onClick={() => {
      navigate(`/users/${user.id}`);
      }}>
      {user.fullName}
      </CardHeader>
      <CardBody>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Test
        </CardSubtitle>
        <Button
          color="dark"
          onClick={() => {
            navigate(`/users/${user.id}`);
          }}
        >
          Show Details
        </Button>
      </CardBody>
    </Card>
  );
}