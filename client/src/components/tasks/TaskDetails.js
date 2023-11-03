import { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText } from "reactstrap";

import { useParams } from "react-router-dom";
import { getProjectTaskById } from "../../managers/projectTaskManager";


export default function TaskDetails() {
  const [task, setTask] = useState(null);
  const { id } = useParams();

  const getProjectTaskDetails = (id) => {
    getProjectTaskById(id).then(setTask);
  };

  useEffect(() => {
      getProjectTaskDetails(id);
    
  }, [id]);



  return (
    <>
    <div className="taskDetailsContainer">
      <h2>Task Details</h2>
      <Card color="dark" inverse>
        <CardBody>
          <CardTitle tag="h4">{task?.title}</CardTitle>
          <CardText>Category: {task?.category?.title}</CardText>
          <CardText>Project: {task?.project?.title}</CardText>
          <CardText>DueDate: {task?.dueDate}</CardText>
          <CardText>Completed? {task?.isCompleted? "Yes" : "No"}</CardText>
        </CardBody>
      </Card>
    </div>
     
    
    </>
  );
}
