import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";


import { createUserProject, getUserProjectsNotAssociatedByProjectWithId } from "../../managers/userProjectManager";
import { getProjectById } from "../../managers/projectManager";
import { getUsersNotAssociatedWithProject } from "../../managers/userProfileManager";



export const ProjectUserAddForm = () => {

    const [project, setProject] = useState(null);
    const [unassignedUserProfiles, setUnassignedUserProfiles] = useState([])
    const [userProfileId, setUserProfileId] = useState(0)
   
    const { id } = useParams();
    

    const navigate = useNavigate()

  

    const getProjectDetails = (id) => {
        getProjectById(id).then(setProject);
      };

    const getUnassignedUsers = (id) => {
        getUsersNotAssociatedWithProject(id).then(setUnassignedUserProfiles);
      };



      useEffect(() => {
        getProjectDetails(id);
        getUnassignedUsers(id);
    }, [id]);
  



    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        
        const userProjectToPost = {
            userProfileId,
            projectId : project.id
            
        };

        createUserProject(userProjectToPost)
        .then(() => {
            navigate(`/projects/${project.id}`); // This ensures navigation happens after order creation
        });
    
    };

    return <>
        <div className="orderCreationFormContainer">
        <div className="orderCreationForm">
            <h2 className="orderFormTitle">Add User for {project?.title}</h2>
            <Form>
                
                <FormGroup>
                    <Label for="categorySelect">User</Label>
                    <Input 
                    type="select" 
                    name="user" 
                    value={userProfileId}
                    onChange={(e) => {
                        setUserProfileId(parseInt(e.target.value))}}
                    >
                    <option value="0">Choose a User</option>
                    {unassignedUserProfiles?.map((up) => (
                    <option value={up.id} key={up.id}>{up?.fullName}</option>
                    ))}
                    </Input>
                </FormGroup>
                
                <Button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                    Add User to Project
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