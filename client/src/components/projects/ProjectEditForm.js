import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { createProject, editProject, getProjectById } from "../../managers/projectManager";
import { getCategories } from "../../managers/categoryManager";



export const ProjectEditForm = () => {

    const [project, setProject] = useState(null);
    const [allCategories, setAllCategories] = useState([])
    

    const [categoryId, setCategoryId] = useState(0)
    const [title, setTitle] = useState("")
 
    
    const { id } = useParams();

    const navigate = useNavigate()

    const getProjectDetails = (id) => {
        getProjectById(id).then(setProject) 
      };

    const getAllCategories = () => {
        getCategories().then(setAllCategories); // Replace getOrders with your actual method to fetch orders
    };
    
      useEffect(() => {
        
        getAllCategories();
      }, []);

      useEffect(() => {
        getProjectDetails(id);
      
    }, [id]);




    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        const projectToEdit = {
            id: project.id,
            title,
            categoryId,
            
        };

        editProject(projectToEdit)
        .then(() => {
            navigate("/projects"); // This ensures navigation happens after order creation
        });
    
    };

    return <>
        <div className="orderCreationFormContainer">
        <div className="orderCreationForm">
            <h2 className="orderFormTitle">Edit Project</h2>
            <Form>
                <FormGroup>
                    <Label for="titleInput">Title</Label>
                    <Input type="text" 
                    name="title" 
                    placeholder={project?.title}
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
                    placeholder={project?.category?.title}
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

                <Button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                    Edit Project
                </Button>
            </Form> 
        </div>
        </div>
    </>
}