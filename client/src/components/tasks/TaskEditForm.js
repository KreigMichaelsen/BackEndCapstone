import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { createProjectTask, editTask, getProjectTaskById } from "../../managers/projectTaskManager";
import { getUsers } from "../../managers/userProfileManager";
import { getProjects } from "../../managers/projectManager";
import { getCategories } from "../../managers/categoryManager";



export const TaskEditForm = () => {
    
    const [task, setTask] = useState(null);

    const [allUserProfiles, setAllUserProfiles] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [allProjects, setAllProjects] = useState([])
    
    const [userProfileId, setUserProfileId] = useState(0)
    const [categoryId, setCategoryId] = useState(0)
    const [projectId, setProjectId] = useState(0)
    const [title, setTitle] = useState("")
    const [dueDate, setDueDate] = useState(null)


    const navigate = useNavigate()
    const { id } = useParams();

    const getTaskDetails = (id) => {
        getProjectTaskById(id).then(setTask);
      };    
    
    useEffect(() => {
        getUsers().then(setAllUserProfiles);
        getProjects().then(setAllProjects);
        getCategories().then(setAllCategories);

        getProjectTaskById(id).then((task) => {
            setTask(task);
            setUserProfileId(task.userProfileId);
            setProjectId(task.projectId);
            setCategoryId(task.categoryId);
            setTitle(task.title);
            setDueDate(task.dueDate);
        });

    }, [id]);

    // useEffect(() => {
    //     getTaskDetails(id);
      
    // }, [id]);


    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const taskToEdit = {
            id: task.id,
            userProfileId,
            categoryId,
            projectId,
            title,
            dueDate,
            
        };

        editTask(taskToEdit)
        .then(() => {
            navigate("/tasks"); // This ensures navigation happens after order creation
        });
    
    };

    return <>
        <div className="taskEditFormContainer">
        <div className="taskEditForm">
            <h2 className="taskEditFormTitle">Edit Task</h2>
            <Form>
            <FormGroup>
                    <Label for="titleInput">Title</Label>
                    <Input type="text" 
                    name="title" 
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)}}
                    >
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="userSelect">User</Label>
                    <Input 
                    type="select" 
                    name="user" 
                    value={userProfileId}
                    onChange={(e) => {
                        setUserProfileId(parseInt(e.target.value))}}
                    >
                    <option value="0">Choose a User</option>
                    {allUserProfiles.map((userProfile) => (
                    <option value={userProfile.id} key={userProfile.id}>{userProfile.fullName}</option>
                    ))}
                    </Input>
                </FormGroup>
                <FormGroup>
                        <Label for="categorySelect">Category</Label>
                        <Input type="select" 
                        name="category" 
                        value={categoryId}
                        onChange={(e) => {
                            setCategoryId(parseInt(e.target.value))}}
                        >
                        <option value="0">Choose a Category</option>
                        {allCategories.map((category) => (
                        <option value={category.id} key={category.id}>{category.title}</option>
                        ))}
                        </Input>
                </FormGroup>
                <FormGroup>
                        <Label for="projectSelect">Project</Label>
                        <Input type="select" 
                        name="project" 
                        value={projectId}
                        onChange={(e) => {
                            setProjectId(parseInt(e.target.value))}}
                        >
                        <option value="0">Choose a Project</option>
                        {allProjects.map((project) => (
                        <option value={project.id} key={project.id}>{project.title}</option>
                        ))}
                        </Input>
                </FormGroup>
                <FormGroup>
                        <Label for="exampleDatetime">Due Date</Label>
                        <Input type="date" 
                        name="date" 
                        id="exampleDatetime" 
                        placeholder="datetime placeholder"
                        value={dueDate}
                        onChange={(e) => {
                        setDueDate(e.target.value)}}
                        />
                        

                </FormGroup>
                

                <Button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                    Edit Task
                </Button>
                <Button
                color="danger"
                onClick={() => {
                    navigate(`/tasks`)
                }}
                >
                Cancel
                </Button>
            </Form>
        </div>
        </div>
    </>
}