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
        getUsers().then(setAllUserProfiles);
    };

    const getAllCategories = () => {
        getCategories().then(setAllCategories);
    };

    useEffect(() => {
        getAllUserProfiles();
        getAllCategories();
    }, []);


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
        <div className="projectCreationFormContainer">
            <div className="projectCreationForm">
                <h2 className="projectCreationFormTitle">Create A New Project</h2>
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
                        <Label for="categorySelect">Category</Label>
                        <Input
                            type="select"
                            name="category"
                            value={categoryId}
                            onChange={(e) => {
                                setCategoryId(parseInt(e.target.value))
                            }}
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

                    <Button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                        Create Project
                    </Button>
                    <Button
                        color="danger"
                        onClick={() => {
                            navigate(`/projects`)
                        }}
                    >
                        Cancel
                    </Button>
                </Form>
            </div>
        </div>
    </>
}