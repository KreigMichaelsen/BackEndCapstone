import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { createProjectTask } from "../../managers/projectTaskManager";
import { getUsers } from "../../managers/userProfileManager";
import { getProjectById, getProjects } from "../../managers/projectManager";
import { getCategories } from "../../managers/categoryManager";



export const ProjectTaskAddForm = () => {


    const [project, setProject] = useState(null);

    const [allUserProfiles, setAllUserProfiles] = useState([])
    const [allCategories, setAllCategories] = useState([])

    
    const [userProfileId, setUserProfileId] = useState(0)
    const [categoryId, setCategoryId] = useState(0)
    const [title, setTitle] = useState("")
    const [dueDate, setDueDate] = useState(null)

    
    const { id } = useParams();

    const navigate = useNavigate();
  
    const getProjectDetails = (id) => {
      getProjectById(id).then(setProject);
    };
  

    useEffect(() => {
        getUsers().then(setAllUserProfiles);
        getCategories().then(setAllCategories);

    }, []);

    useEffect(() => {
        getProjectDetails(id);
      
    }, [id]);


    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const taskToPost = {
            userProfileId,
            categoryId,
            projectId : project.id,
            title,
            dueDate,
            
        };

        createProjectTask(taskToPost)
        .then(() => {
            navigate(`/projects/${project.id}`); // This ensures navigation happens after order creation
        });
    
    };

    return <>
        <div className="orderCreationFormContainer">
        <div className="orderCreationForm">
            <h2 className="orderFormTitle">Create A New Task for {project?.title}</h2>
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
                        <Label for="exampleDatetime">Datetime</Label>
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
                    Create Task
                </Button>
            </Form>
        </div>
        </div>
    </>
}