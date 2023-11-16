import { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText, Progress, Button, DropdownToggle, DropdownItem, DropdownMenu, ButtonDropdown, Modal, ModalHeader, ModalBody, ModalFooter, Tooltip, Badge } from "reactstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdOutlineAddTask, MdAddTask, MdOutlineNoteAdd } from "react-icons/md";
import "./project.css"
import { completeProject, getProjectById, unCompleteProject, updateProjectCompletion } from "../../managers/projectManager";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectTaskByProjectId } from "../../managers/projectTaskManager";
import {  getProjectNotesByProjectId } from "../../managers/projectNoteManager";
import TaskForProjectCard from "../tasks/TaskForProjectCard";
import NoteForProjectCard from "../notes/NoteForProjectCard";
import UserProjectForProjectCard from "../userProjects/UserProjectForProjectCard";
import { getUserProjectsByProjectId } from "../../managers/userProjectManager";
import { ProjectUserAddForm } from "../projects/ProjectUserAddForm";
import { ProjectTaskAddForm } from "./ProjectTaskAddForm";
import { ProjectNoteAddForm } from "./ProjectNoteAddForm";




export default function ProjectDetails({loggedInUser}) {
  const [project, setProject] = useState({
    completion: 0
  });
  const [tasksForProject, setTasksForProject] = useState([]);
  const [filteredTasksForProject, setFilteredTasksForProject] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [projectNotesForProject, setProjectNotesForProject] = useState([]);
  const [userProjectsForProject, setUserProjectsForProject] = useState([]);
  const [progress, setProgress] = useState(0);
  const [allTasksForProject, setAllTasksForProject] = useState([]);
  const [projectCompleted, setProjectCompleted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);
  const [noteModal, setNoteModal] = useState(false);
  const [userTooltipOpen, setUserTooltipOpen] = useState(false);
  const [taskTooltipOpen, setTaskTooltipOpen] = useState(false);
  const [noteTooltipOpen, setNoteTooltipOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const toggleModal = () => setModal(!modal);
  const toggleTaskModal = () => setTaskModal(!taskModal);
  const toggleNoteModal = () => setNoteModal(!noteModal);

  const toggleUserToolTip = () => setUserTooltipOpen(!userTooltipOpen);
  const toggleTaskToolTip = () => setTaskTooltipOpen(!taskTooltipOpen);
  const toggleNoteToolTip = () => setNoteTooltipOpen(!noteTooltipOpen);

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
    getProjectTaskByProjectId(id).then(setAllTasksForProject); 
  };

  const getTasksForProject = (id) => {
    getProjectTaskByProjectId(id).then((tasks) => {
      if (showCompleted === true) {
        const completedTasks = tasks?.filter(task => task.isCompleted);
        setTasksForProject(completedTasks);
      } else if (showCompleted === false) {
        const incompleteTasks = tasks?.filter(task => !task.isCompleted);
        setTasksForProject(incompleteTasks);
      } else {
        setTasksForProject(tasks); 
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

  setFilteredTasksForProject(tasksForProject);

}, [tasksForProject]);


  useEffect(() => {

   const completedTasksCount = allTasksForProject?.filter(task => task.isCompleted).length;
   const totalTasksCount = allTasksForProject.length;
   if (totalTasksCount > 0) {
    const calculatedProgress = Math.round((completedTasksCount / totalTasksCount) * 100);
    setProgress(calculatedProgress);


    if (calculatedProgress === 100) {
      setProjectCompleted(true);
    } else {
      setProjectCompleted(false);
    }
  } else {
    setProgress(0);
    setProjectCompleted(false);
  }


  }, [allTasksForProject, tasksForProject]);


  useEffect(() => {

      if (progress === 100 && project.isCompleted === false) {
        // Assuming you have a function to mark a project as completed
       
        completeProject(id);
        // updateProjectCompletion(id, project)
        getProjectDetails(id);
      } else {
        
        unCompleteProject(id);
        // updateProjectCompletion(id, project)
        getProjectDetails(id);
      }
    
  }, [projectCompleted]);

  return (
    <div className="projectDetailsContainer">
      <h1>{project?.title}</h1>
      <Card  className="projectDetailsCard" inverse>
        <CardBody>
          <Progress className="projectProgressBar" color="warning" value={progress} />
          <CardText>Completion: {progress}%</CardText>
          <CardText>
            Category:  
            <Badge className="projectCategoryPillBadge"
            color="warning"
            pill
            >
            {project?.category?.title}
          </Badge>
          </CardText>
          <CardTitle tag="h4">Users</CardTitle>
          
    <div>
      <Button 
      id="addUserForProjectButton" 
      className="addUserForProjectButton" 
      color="warning" onClick={toggleModal}>
      <BsFillPersonPlusFill className="addUserForProjectIcon"/>
      </Button>
      <Tooltip
        isOpen={userTooltipOpen}
        target="addUserForProjectButton"
        toggle={toggleUserToolTip}
      >
        Add User
      </Tooltip>

      <Modal isOpen={modal} toggle={toggleModal}>
        
        <ModalBody>

        <ProjectUserAddForm 
        toggleModal={toggleModal}
        getAllUsersForProject={getAllUsersForProject}/>

        </ModalBody>
      </Modal>
    </div>

          <div className="userProjectCardForProjectListContainer">
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
      <h2>Tasks</h2>
      <div>
      <Button id="addTaskForProjectButton" className="addTaskForProjectButton" color="warning" onClick={toggleTaskModal}>
      <MdAddTask className="addTaskForProjectIcon"/>
      </Button>
      <Tooltip
        isOpen={taskTooltipOpen}
        target="addTaskForProjectButton"
        toggle={toggleTaskToolTip}
      >
        Add Task
      </Tooltip>

      <Modal isOpen={taskModal} toggle={toggleTaskModal}>
        <ModalBody>

        <ProjectTaskAddForm
        toggleTaskModal={toggleTaskModal}
        getAllTasksForProject={getAllTasksForProject}
        getTasksForProject={getTasksForProject}/>

        </ModalBody>
      </Modal>
    </div>
    
      
      <ButtonDropdown className="filterTaskDropdownButton" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="filterTaskDropdownForProjectToggle" caret color="dark">
          Filter Completion
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => setShowCompleted(false)}>Show Incomplete</DropdownItem>
          <DropdownItem onClick={() => setShowCompleted(true)}>Show Completed</DropdownItem>
          <DropdownItem onClick={() => setShowCompleted(null)}>Show All Tasks</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <div className="taskForProjectCardListContainer">   
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
      </div>    

 
      <h2>Notes</h2>
      <div>
      <Button id="addNoteForProjectButton"
          className="addNoteForProjectButton" 
          color="warning" onClick={toggleNoteModal}>
      <MdOutlineNoteAdd className="addNoteForProjectIcon"/>
      </Button>
      <Tooltip
        isOpen={noteTooltipOpen}
        target="addNoteForProjectButton"
        toggle={toggleNoteToolTip}
      >
        Add Note
      </Tooltip>

      <Modal isOpen={noteModal} toggle={toggleNoteModal}>
        <ModalBody>

        <ProjectNoteAddForm
        toggleNoteModal={toggleNoteModal}
        getAllNotesForProject={getAllNotesForProject}
        loggedInUser={loggedInUser}
        />

        </ModalBody>
      </Modal>
    </div>
  
      <div className="noteForProjectCardListContainer">
            {projectNotesForProject?.map((note) => (
              <NoteForProjectCard
                note={note}
                key={`note-${note.id}`}
                getAllNotesForProject={getAllNotesForProject}
                project={project}

              >
              </NoteForProjectCard>


            ))}
            </div>
          

    </div>
  );
}
