import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Projects from "./projects/Projects";
import ProjectDetails from "./projects/ProjectDetails";
import { ProjectCreationForm } from "./projects/ProjectCreationForm";
import { TaskCreationForm } from "./tasks/TaskCreationForm";
import TaskDetails from "./tasks/TaskDetails";
import Tasks from "./tasks/Tasks";
import { ProjectEditForm } from "./projects/ProjectEditForm";
import UserProfiles from "./users/UserProfiles";
import UserProfileDetails from "./users/UserProfileDetails";
import UserProjects from "./userProjects/UserProjects";
import { ProjectUserAddForm } from "./projects/ProjectUserAddForm";
import { ProjectTaskAddForm } from "./projects/ProjectTaskAddForm";
import { TaskEditForm } from "./tasks/TaskEditForm";
import Notes from "./notes/Notes";
import { NoteCreationForm } from "./notes/NoteCreationForm";
import { ProjectNoteAddForm } from "./projects/ProjectNoteAddForm";
import AllProjects from "./projects/AllProjects";
import AllTasks from "./tasks/AllTasks";
import HomePage from "./homepage/HomePage";
import { NoteEditForm } from "./notes/NoteEditForm";
import NoteDetails from "./notes/NoteDetails";


export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
             <HomePage loggedInUser={loggedInUser}/>
            </AuthorizedRoute>
          }
        />
        <Route path="projects">
        <Route
        index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Projects loggedInUser={loggedInUser}/>
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <ProjectDetails loggedInUser={loggedInUser}/>
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id/edit"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <ProjectEditForm/>
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id/addUser"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <ProjectUserAddForm/>
            </AuthorizedRoute>
          }
        />
         <Route
          path=":id/addTask"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <ProjectTaskAddForm/>
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id/addNote"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <ProjectNoteAddForm loggedInUser={loggedInUser}/>
            </AuthorizedRoute>
          }
        />
        <Route
            path="create"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <ProjectCreationForm/>
              </AuthorizedRoute>
            }
            />
        </Route>
        <Route path="tasks">
        <Route
        index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Tasks loggedInUser={loggedInUser}/>
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <TaskDetails />
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id/edit"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <TaskEditForm/>
            </AuthorizedRoute>
          }
        />
        <Route
            path="create"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <TaskCreationForm/>
              </AuthorizedRoute>
            }
            />
         </Route>
        <Route path="notes">
        <Route
        index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Notes />
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <NoteDetails />
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id/edit"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <NoteEditForm/>
            </AuthorizedRoute>
          }
        />
        <Route
            path="create"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <NoteCreationForm
                loggedInUser={loggedInUser}
                />
              </AuthorizedRoute>
            }
            />
        </Route>
        <Route path="users">
        <Route
        index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <UserProfiles/>
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <UserProfileDetails />
            </AuthorizedRoute>
          }
        />
        </Route>
        
        <Route path="userProjects">
        <Route
        index
          element={
            <AuthorizedRoute roles={["Admin"]} loggedInUser={loggedInUser}>
              <UserProjects/>
            </AuthorizedRoute>
          }
        />
        <Route
            path="create"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <TaskCreationForm/>
              </AuthorizedRoute>
            }
            />
        </Route>
        <Route path="AllProjects">
        <Route
        index
          element={
            <AuthorizedRoute roles={["Admin"]} loggedInUser={loggedInUser}>
              <AllProjects/>
            </AuthorizedRoute>
          }
        />
        </Route>
        <Route path="AllTasks">
        <Route
        index
          element={
            <AuthorizedRoute roles={["Admin"]} loggedInUser={loggedInUser}>
              <AllTasks/>
            </AuthorizedRoute>
          }
        />
        </Route>
        
        <Route
          path="login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="register"
          element={<Register setLoggedInUser={setLoggedInUser} />}
        />
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  );
}
