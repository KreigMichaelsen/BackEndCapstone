import { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText, Progress } from "reactstrap";
import { useParams } from "react-router-dom";
import { getUserById } from "../../managers/userProfileManager";


export default function UserProfileDetails() {
  const [user, setUser] = useState(null);

  const { id } = useParams();

  const getUserDetails = (id) => {
    getUserById(id).then(setUser);
  };


  useEffect(() => {
    getUserDetails(id);
    
  }, [id]);




  return (
    <>
    <div className="userProfileDetailsContainer">
      <h1>{user?.fullName}</h1>
      <Card color="dark" inverse>
        <CardBody>
          <CardTitle tag="h4">Details</CardTitle>
          <CardText>First Name: {user?.firstName}</CardText>
          <CardText>Last Name: {user?.lastName}</CardText>
            
        </CardBody>
      </Card>
      </div>
    
    </>
  );
}