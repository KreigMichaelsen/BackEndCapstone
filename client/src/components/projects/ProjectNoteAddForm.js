import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import { createProjectNote } from "../../managers/projectNoteManager";
import { getProjectById } from "../../managers/projectManager";




export const ProjectNoteAddForm = ({loggedInUser}) => {
    
    const [project, setProject] = useState(null);
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const { id } = useParams();

    const navigate = useNavigate();
  
    const getProjectDetails = (id) => {
      getProjectById(id).then(setProject);
    };
  


    useEffect(() => {
        getProjectDetails(id);
      
    }, [id]);


    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const noteToPost = {
            userProfileId: loggedInUser.id,
            projectId: project.id,
            title,
            body,
            
        };

        createProjectNote(noteToPost)
        .then(() => {
            navigate(`/projects/${project.id}`); // This ensures navigation happens after order creation
        });
    
    };

    return <>
        <div className="orderCreationFormContainer">
            <div className="orderCreationForm">
                <h2 className="orderFormTitle">Add A New Note</h2>
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
                    <Button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                        Add Note
                    </Button>
                    <Button
                color="danger"
                onClick={() => {
                    navigate(`/projects/${project.id}`)
                }}
                >
                Cancel
                </Button>
                </Form>
            </div>
        </div>
    </>
}