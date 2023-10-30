import { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText, Progress, Button } from "reactstrap";
import { getProjectById } from "../../managers/projectManager";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectTaskByProjectId } from "../../managers/projectTaskManager";
import {  getProjectNotesByProjectId } from "../../managers/projectNoteManager";
import UserProjectCard from "../userProjects/UserProjectCard";
import TaskForProjectCard from "../tasks/TaskForProjectCard";
import NoteForProjectCard from "../notes/NoteForProjectCard";
import ProjectCalender from "./ProjectCalender";
import UserProjectForProjectCard from "../userProjects/UserProjectForProjectCard";
import { getUserProjectsByProjectId } from "../../managers/userProjectManager";


export default function ProjectDetails() {
  const [project, setProject] = useState(null);
  const [tasksForProject, setTasksForProject] = useState([]);
  const [filteredTasksForProject, setFilteredTasksForProject] = useState([]);
  // const [completed, setCompleted] = useState();
  const [showCompleted, setShowCompleted] = useState(false);
  const [projectNotesForProject, setProjectNotesForProject] = useState([]);
  const [userProjectsForProject, setUserProjectsForProject] = useState([]);
  const [progress, setProgress] = useState(0);
  const [allTasksForProject, setAllTasksForProject] = useState([]);
  // const [completedTasks, setCompletedTasks] = useState(0);
  

  const { id } = useParams();
  const navigate = useNavigate();

  const getProjectDetails = (id) => {
    getProjectById(id).then(setProject);
  };

  const getAllNotesForProject = (id) => {
    getProjectNotesByProjectId(id).then(setProjectNotesForProject);
  };

  const getAllUsersForProject = (id) => {
    getUserProjectsByProjectId(id).then(setUserProjectsForProject);
  };

  const getAllTasksForProject = (id) => {
    getProjectTaskByProjectId(id).then(setAllTasksForProject); // Replace getOrders with your actual method to fetch orders
  };

  const getTasksForProject = (id) => {
    getProjectTaskByProjectId(id).then((tasks) => {
      if (showCompleted === true) {
        const completedTasks = tasks.filter(task => task.isCompleted);
        setTasksForProject(completedTasks);
      } else if (showCompleted === false) {
        const incompleteTasks = tasks.filter(task => !task.isCompleted);
        setTasksForProject(incompleteTasks);
      } else {
        setTasksForProject(tasks); // Show all tasks
      }
    });
  };



  useEffect(() => {
      getProjectDetails(id);
      getTasksForProject(id);
      getAllNotesForProject(id);
      getAllUsersForProject(id);
      getAllTasksForProject(id)
      
    
  }, [id, showCompleted]);

  useEffect(() => {
    
    getAllTasksForProject(id)
    
  
}, []);



  useEffect(() => {

   // Calculate progress percentage
   const completedTasks = allTasksForProject.filter(task => task.isCompleted).length;
   const totalTasks = allTasksForProject.length;
   const calculatedProgress = (completedTasks / totalTasks) * 100;
   setProgress(calculatedProgress);

   

  }, [allTasksForProject, tasksForProject]);

  useEffect(() => {

   
    setFilteredTasksForProject(tasksForProject);

  //  // Calculate completed tasks
  //  const completedTasksCount = tasksForProject.filter(task => task.isCompleted).length;
  //  setCompletedTasks(completedTasksCount);

  }, [tasksForProject]);





  return (
    <>
      <h1>{project?.title}</h1>
      <Card color="dark" inverse>
        <CardBody>
          <CardTitle tag="h4">Details</CardTitle>
          <Progress value={progress} />

          <CardText>Category: {project?.category?.title}</CardText>
          {/* <CardText>DueDate: {project?.dueDate}</CardText> */}
          <CardTitle tag="h4">Users</CardTitle>
          <Button
            color="primary"
            onClick={() => {
              navigate(`/projects/${project.id}/addUser`);
            }}
          >
            Add User
          </Button>

          <div>
            {userProjectsForProject.map((userProject) => (
              <UserProjectForProjectCard
                userProject={userProject}
                key={`userProject-${userProject.id}`}
                getProjectDetails={getProjectDetails}
                getAllUsersForProject={getAllUsersForProject}
                project={project}

              >
              </UserProjectForProjectCard>


            ))}
          </div>

        </CardBody>
      </Card>
      <h4>Tasks</h4>
      <Button
          color="primary"
          onClick={() => {
              navigate(`/projects/${project.id}/addTask`);
            }}
      >
            Add Task
      </Button>
      {/* <Button onClick={ () => { setCompleted(false) } }> Incomplete</Button>
      <Button onClick={ () => { setCompleted(true) } }> Complete</Button>  */}
      <Button onClick={() => setShowCompleted(false)}>Show Incomplete</Button>
      <Button onClick={() => setShowCompleted(true)}>Show Completed</Button>
      <Button onClick={() => setShowCompleted(null)}>Show All Tasks</Button>

      {filteredTasksForProject.map((task) => (
      <TaskForProjectCard
          task={task}
          key={task.id}
          getTasksForProject={getTasksForProject}
          getAllTasksForProject={getAllTasksForProject}
          project={project}
      >
      </TaskForProjectCard>
      ))}

      <h4>Project Notes</h4>
      <Button
          color="primary"
          onClick={() => {
            navigate(`/projects/${project.id}/addNote`)
          }}
        >
          Add Note
        </Button>
            {projectNotesForProject?.map((note) => (
              <NoteForProjectCard
                note={note}
                key={`note-${note.id}`}
                getAllNotesForProject={getAllNotesForProject}
                project={project}

              >
              </NoteForProjectCard>


            ))}
            {/* <div>
              <ProjectCalender>

              </ProjectCalender>
            </div> */}
          

    </>
  );
}
