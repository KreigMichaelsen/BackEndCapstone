import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import { getUsers } from "../../managers/userProfileManager";
import { createUserProject } from "../../managers/userProjectManager";
import { getProjectById } from "../../managers/projectManager";



export const ProjectUserAddForm = () => {

    const [project, setProject] = useState(null);
    const [allUserProfiles, setAllUserProfiles] = useState([])
   
    const [userProfileId, setUserProfileId] = useState(0)
   
    const { id } = useParams();
    

    const navigate = useNavigate()

    const getAllUserProfiles = () => {
        getUsers().then(setAllUserProfiles); // Replace getOrders with your actual method to fetch orders
    };

    const getProjectDetails = (id) => {
        getProjectById(id).then(setProject);
      };

    
      useEffect(() => {
        getAllUserProfiles();
        
      }, []);

      useEffect(() => {
        getProjectDetails(id);
      
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
            <h2 className="orderFormTitle">Add User</h2>
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
                    {allUserProfiles.map((up) => (
                    <option value={up.id} key={up.id}>{up.fullName}</option>
                    ))}
                    </Input>
                </FormGroup>
                
                <Button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                    Add User to Project
                </Button>
            </Form>
        </div>
        </div>
    </>
}