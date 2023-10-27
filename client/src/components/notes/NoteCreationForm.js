import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import { getProjects } from "../../managers/projectManager";
import { createProjectNote } from "../../managers/projectNoteManager";




export const NoteCreationForm = ({loggedInUser}) => {
    
    const [allProjects, setAllProjects] = useState([])
    const [projectId, setProjectId] = useState(0)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const navigate = useNavigate()

    
      useEffect(() => {
        getProjects().then(setAllProjects);
       

      }, []);


    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const noteToPost = {
            userProfileId: loggedInUser.id,
            projectId,
            title,
            body,
            
        };

        createProjectNote(noteToPost)
        .then(() => {
            navigate("/notes"); // This ensures navigation happens after order creation
        });
    
    };

    return <>
        <div className="orderCreationFormContainer">
            <div className="orderCreationForm">
                <h2 className="orderFormTitle">Create A New Note</h2>
                <Form>
                    <FormGroup>
                        <Label for="titleInput">Title</Label>
                        <Input type="text"
                            name="title"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
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
                        <Label for="projectSelect">Project</Label>
                        <Input type="select"
                            name="project"
                            value={projectId}
                            onChange={(e) => {
                                setProjectId(parseInt(e.target.value))
                            }}
                        >
                            <option value="0">Choose a Project</option>
                            {allProjects.map((project) => (
                                <option value={project.id} key={project.id}>{project.title}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <Button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                        Create Note
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