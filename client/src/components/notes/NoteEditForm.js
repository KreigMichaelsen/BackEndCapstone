import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import "./note.css"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { getUsers } from "../../managers/userProfileManager";
import { getProjects } from "../../managers/projectManager";
import { editNote, getProjectNoteById } from "../../managers/projectNoteManager";



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

        getProjectNoteById(id).then((note) => {
            setNote(note);
            setUserProfileId(note.userProfileId);
            setProjectId(note.projectId);
            setTitle(note.title);
            setBody(note.body);
        });


    }, [id]);

    // useEffect(() => {
    //     getNoteDetails(id);
      
    // }, [id]);


    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const noteToEdit = {
            id: note.id,
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
        <div className="noteEditFormContainer">
        <div className="noteEditForm">
            <h2 className="noteEditFormTitle">{note?.title}</h2>
            <p>Created by: {note?.userProfile?.firstName}</p>
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
                        <Label className="noteEditBodyLabel">Note Body</Label>
                        <Input 
                        className="noteEditBodyInput"
                        type="textarea"
                            name="body"
                            value={body}
                            onChange={(e) => {
                                setBody(e.target.value)
                            }}
                        >
                        </Input>
                    </FormGroup>
                {/* <FormGroup>
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
                </FormGroup> */}
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
                    Save Note
                </Button>
                <Button
                color="danger"
                onClick={() => {
                    navigate(`/notes`)
                }}
                >
                Cancel
                </Button>
            </Form>
        </div>
        </div>
    </>
}