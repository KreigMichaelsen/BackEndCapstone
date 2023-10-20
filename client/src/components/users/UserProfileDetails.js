import { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText, Progress } from "reactstrap";
// import { getProjectById } from "../../managers/projectManager";
import { useParams } from "react-router-dom";
import { getUserById } from "../../managers/userProfileManager";
// import TaskCard from "../tasks/TaskCard";
// import { getProjectTasks } from "../../managers/projectTaskManager";


export default function UserProfileDetails() {
  const [user, setUser] = useState(null);
//   const [tasks, setTasks] = useState([]);

  const { id } = useParams();

  const getUserDetails = (id) => {
    getUserById(id).then(setUser);
  };

//   const getAllTasks = () => {
//     getProjectTasks().then(setTasks); // Replace getOrders with your actual method to fetch orders
//   };

  useEffect(() => {
    getUserDetails(id);
    
  }, [id]);




  return (
    <>
      <h1>{user?.fullName}</h1>
      <Card color="dark" inverse>
        <CardBody>
          <CardTitle tag="h4">Details</CardTitle>
          {/* <Progress
          value={36}
          /> */}
          
          {/* <CardText>Category: {user?.category?.title}</CardText>
          <CardText>DueDate: {project?.dueDate}</CardText> */}
          {/* <CardTitle tag="h4">Users</CardTitle> */}
          {/* <div>
            {project?.userProjects?.map((userProject) => (
                <p key={userProject?.userProfile?.id}>
                  {userProject?.userProfile?.fullName}
                </p>
                
                
            ))}
          </div> */}
            
        </CardBody>
      </Card>
      {/* <h4>Tasks</h4>
      {project?.projectTasks?.map((task) => (
        <TaskCard
        task={task}
        key={task.id}
        getAllTasks={getAllTasks}
        >
        </TaskCard>
      ))} */}
    
    </>
  );
}