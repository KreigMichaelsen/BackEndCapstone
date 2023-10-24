import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { createProject } from "../../managers/projectManager";
import { getUsers } from "../../managers/userProfileManager";
import { getCategories } from "../../managers/categoryManager";



export const ProjectCreationForm = () => {

    const [allUserProfiles, setAllUserProfiles] = useState([])
    const [allCategories, setAllCategories] = useState([])

    const [categoryId, setCategoryId] = useState(0)
    const [title, setTitle] = useState("")
    const [userProfiles, setUserProfiles] = useState([])
    

    const navigate = useNavigate()

    const getAllUserProfiles = () => {
        getUsers().then(setAllUserProfiles); // Replace getOrders with your actual method to fetch orders
    };

    const getAllCategories = () => {
        getCategories().then(setAllCategories); // Replace getOrders with your actual method to fetch orders
    };
    
      useEffect(() => {
        getAllUserProfiles();
        getAllCategories();
      }, []);

    //   const handleCheckboxChange = (event) => {
    //     const { name, checked } = event.target;
    
    //     setSelectedUsers(prevState => {
    //         if (checked && !prevState.includes(name)) {
    //             return [...prevState, name]; // Add to array
    //           } else if (!checked && prevState.includes(name)) {
    //             return prevState.filter(user => user !== name); // Remove from array
    //           } else {
    //             return prevState;
    //           }
    //         });
    //     };

        const handleUserCheckbox = (e, up) => {
            const { checked } = e.target;
            let clone = structuredClone(userProfiles);
            if (checked) {
                clone.push(structuredClone(up));
            } else {
                clone = clone.filter((user) => user.id !== up.id)
            }
            setUserProfiles(clone);
        };
    



    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        console.log(userProfiles)
        
        const projectToPost = {
            categoryId,
            title,
            userProfiles
            
        };

        createProject(projectToPost)
        .then(() => {
            navigate("/projects"); // This ensures navigation happens after order creation
        });
    
    };

    return <>
        <div className="orderCreationFormContainer">
        <div className="orderCreationForm">
            <h2 className="orderFormTitle">Create A New Project</h2>
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
                    <Label for="categorySelect">Category</Label>
                    <Input 
                    type="select" 
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
                    {allUserProfiles?.map((up) => (
                    <Label key={up.id}>
                    <Input 
                        type="checkbox" 
                        name="userProfiles"
                        checked={!!userProfiles.find((user) => user.id === up.id)}
                        onChange={(e) => {
                            handleUserCheckbox(e, up);
                        }}
                    />
                    {up.fullName}
                    </Label>
                    ))}
                </FormGroup>
                
                
                
                
                       {/* <FormGroup>
                       <Label for="tableNumber">Select Table Number</Label>
                       <Input 
                       type="number" 
                       name="table" 
                       placeholder="Enter a table number...." 
                       value={selectedTableNumber}
                       onChange={(e) => {
                           setSelectedTableNumber(parseInt(e.target.value))}}      
                       />
                   </FormGroup> */}
                
                <Button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                    Create Project
                </Button>
            </Form>
        </div>
        </div>
    </>
}