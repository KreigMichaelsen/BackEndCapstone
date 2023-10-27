import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { createProjectTask, editTask, getProjectTaskById } from "../../managers/projectTaskManager";
import { getUsers } from "../../managers/userProfileManager";
import { getProjects } from "../../managers/projectManager";
import { getCategories } from "../../managers/categoryManager";
import { editNote } from "../../managers/projectNoteManager";



export const NoteEditForm = () => {
    
    const [note, setNote] = useState(null);
    const [allUserProfiles, setAllUserProfiles] = useState([])
    const [allProjects, setAllProjects] = useState([])
    
    const [userProfileId, setUserProfileId] = useState(0)
    const [projectId, setProjectId] = useState(0)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")


    const navigate = useNavigate()
    const { id } = useParams();

    const getNoteDetails = (id) => {
        getProjectNoteById(id).then(setNote);
      };    
    
    useEffect(() => {
        getUsers().then(setAllUserProfiles);
        getProjects().then(setAllProjects);

    }, []);

    useEffect(() => {
        getNoteDetails(id);
      
    }, [id]);


    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const noteToEdit = {
            id: note.id,
            userProfileId,
            projectId,
            title,
            body,
            
        };

        editNote(noteToEdit)
        .then(() => {
            navigate("/notes"); // This ensures navigation happens after order creation
        });
    
    };

    return <>
        <div className="orderCreationFormContainer">
        <div className="orderCreationForm">
            <h2 className="orderFormTitle">Edit Note</h2>
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
                        <Label for="bodyInput">Note Body</Label>
                        <Input type="textarea"
                            name="body"
                            value={body}
                            onChange={(e) => {
                                setBody(e.target.value)
                            }}
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
                

                <Button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                    Create Task
                </Button>
            </Form>
        </div>
        </div>
    </>
}